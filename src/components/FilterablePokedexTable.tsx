import { useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { keepPreviousData } from "@tanstack/react-query";
import { trpc } from "@/trpc/client";
import { PokedexTable } from "./PokedexTable";
import { PokemonTypeSelection } from "./PokemonTypeSelection";

export function FilterablePokedexTable() {
  const [selectedType, setSelectedType] = useState<string | undefined>();
  const [page, setPage] = useState(1);

  const typesQuery = trpc.pokemon.getAllTypes.useQuery(undefined, {
    staleTime: 1000 * 60 * 5,
  });

  const listQuery = trpc.pokemon.getByType.useQuery(
    {
      type: selectedType,
      page,
      pageSize: 5,
    },
    {
      placeholderData: keepPreviousData,
    },
  );

  const totalPages =
    listQuery.data && listQuery.data.pageSize > 0
      ? Math.max(1, Math.ceil(listQuery.data.total / listQuery.data.pageSize))
      : 1;

  return (
    <Stack spacing={2} mt={2}>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={(type) => {
          setSelectedType(type);
          setPage(1);
        }}
        options={typesQuery.data ?? []}
      />

      <PokedexTable
        pokemon={listQuery.data?.items ?? []}
        emptyMessage={
          listQuery.isLoading ? "Loading..." : "No Pokémon found for this filter."
        }
      />

      {totalPages > 1 && (
        <Box display="flex" justifyContent="flex-end">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              Page {page} of {totalPages}
            </Typography>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              size="small"
              color="primary"
            />
          </Stack>
        </Box>
      )}
    </Stack>
  );
}

