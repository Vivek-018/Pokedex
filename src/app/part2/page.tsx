"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { trpc } from "@/trpc/client";
import { PokedexTable } from "@/components/PokedexTable";

export default function Part2Page() {
  const [namesInput, setNamesInput] = useState("");
  const [submittedNames, setSubmittedNames] = useState<string[] | null>(null);

  const pokemonArrayQuery = trpc.pokemon.getManyByNames.useQuery(
    {
      names: submittedNames ?? [],
    },
    {
      enabled: !!submittedNames && submittedNames.length > 0,
    },
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const names = namesInput
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);
    setSubmittedNames(names.length > 0 ? names : null);
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.action.hover})`,
        }}
      >
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: 1.5 }}
            >
              Part 2
            </Typography>
            <Typography
              variant="h4"
              fontWeight={800}
              gutterBottom
              sx={{ fontSize: { xs: 24, md: 30 } }}
            >
              Pokedex Table
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
              Enter a comma-separated list of Pokémon names to fetch them all
              and render a Pokedex table.
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              component={Link}
              href="/"
              variant="contained"
              color="primary"
              size="small"
              sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}
            >
              ← Back to home
            </Button>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Pokémon names (comma-separated)"
                variant="outlined"
                size="small"
                fullWidth
                value={namesInput}
                onChange={(event) => setNamesInput(event.target.value)}
                placeholder="Bulbasaur, Charmander, Squirtle"
              />
              <Box display="flex" justifyContent="flex-start">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!namesInput.trim()}
                  sx={{ px: 4, py: 1.2, fontWeight: 600 }}
                >
                  Search
                </Button>
              </Box>
            </Stack>
          </Box>

          <PokedexTable
            pokemon={pokemonArrayQuery.data ?? []}
            emptyMessage={
              submittedNames
                ? pokemonArrayQuery.isLoading
                  ? "Loading..."
                  : "No Pokémon found for those names."
                : "Enter names and submit to see results."
            }
          />
        </Stack>
      </Paper>
    </Container>
  );
}

