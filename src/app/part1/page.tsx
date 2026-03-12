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

export default function Part1Page() {
  const [nameInput, setNameInput] = useState("");
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const pokemonQuery = trpc.pokemon.getByName.useQuery(
    { name: submittedName ?? "" },
    {
      enabled: !!submittedName,
    },
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = nameInput.trim();
    setSubmittedName(trimmed || null);
  };

  const pokemonArray = pokemonQuery.data ? [pokemonQuery.data] : [];

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
              Part 1
            </Typography>
            <Typography
              variant="h4"
              fontWeight={800}
              gutterBottom
              sx={{ fontSize: { xs: 24, md: 30 } }}
            >
              Single Pokémon Lookup
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
              Enter a Pokémon name to fetch its ID, name, types, and sprite
              from the database.
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              component={Link}
              href="/"
              variant="text"
              size="small"
              sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}
            >
              ← Back to home
            </Button>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", sm: "flex-end" }}
            >
              <TextField
                label="Pokémon name"
                variant="outlined"
                size="small"
                fullWidth
                value={nameInput}
                onChange={(event) => setNameInput(event.target.value)}
                placeholder="e.g. Pikachu"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!nameInput.trim()}
                sx={{ px: 4, py: 1.2, fontWeight: 600, whiteSpace: "nowrap" }}
              >
                Search
              </Button>
            </Stack>
          </Box>

          <PokedexTable
            pokemon={pokemonArray}
            emptyMessage={
              submittedName
                ? pokemonQuery.isLoading
                  ? "Loading..."
                  : "No Pokémon found with that name."
                : "Submit a name to see results."
            }
          />
        </Stack>
      </Paper>
    </Container>
  );
}

