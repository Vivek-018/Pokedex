"use client";

import Link from "next/link";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 4, md: 8 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={(theme) => ({
          width: "100%",
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          bgcolor: "background.paper",
          boxShadow: 6,
          border: "1px solid",
          borderColor: "divider",
          backgroundImage: `radial-gradient(circle at top left, ${theme.palette.primary.light}22, transparent 55%)`,
        })}
      >
        <Stack spacing={4}>
          <Box>
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: 1.5 }}
            >
              Pokedex Demo
            </Typography>
            <Typography
              variant="h3"
              fontWeight={800}
              gutterBottom
              color="text.primary"
              sx={{ mt: 1, fontSize: { xs: 28, md: 34 } }}
            >
              Pokedex Assignment
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520 }}>
              Explore a clean, modular implementation of the three Pokedex
              assignment parts using Next.js, tRPC, Prisma with Postgres, and
              Material UI. Use the sections below to jump into each part.
            </Typography>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ width: "100%", pt: 1 }}
          >
            <Button
              component={Link}
              href="/part1"
              variant="contained"
              fullWidth
              sx={{ py: 1.4, fontWeight: 600 }}
            >
              Part 1 – Single Pokémon
            </Button>
            <Button
              component={Link}
              href="/part2"
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ py: 1.4, fontWeight: 600 }}
            >
              Part 2 – Pokedex Table
            </Button>
            <Button
              component={Link}
              href="/part3"
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ py: 1.4, fontWeight: 600 }}
            >
              Part 3 – Filterable Pokedex
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
