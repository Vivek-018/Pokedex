"use client";

import Link from "next/link";
import { Container, Stack, Typography, Box, Paper, Button } from "@mui/material";
import { FilterablePokedexTable } from "@/components/FilterablePokedexTable";

export default function Part3Page() {
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
              Part 3
            </Typography>
            <Typography
              variant="h4"
              fontWeight={800}
              gutterBottom
              sx={{ fontSize: { xs: 24, md: 30 } }}
            >
              Filterable Pokedex
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
              Filter the Pokedex by Pokémon type. Only Pokémon matching the
              selected type will be displayed.
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

          <FilterablePokedexTable />
        </Stack>
      </Paper>
    </Container>
  );
}

