import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { Pokemon } from "./PokemonRow";
import { PokemonRow } from "./PokemonRow";

type PokedexTableProps = {
  pokemon: Pokemon[];
  emptyMessage?: string;
};

export function PokedexTable({ pokemon, emptyMessage }: PokedexTableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        borderRadius: 2.5,
        boxShadow: 4,
        overflow: "hidden",
      }}
    >
      <Table size="small">
        <TableHead>
          <TableRow
            sx={(theme) => ({
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            })}
          >
            <TableCell width="10%">
              <Typography
                variant="subtitle2"
                color="common.white"
                sx={{ letterSpacing: 0.5 }}
              >
                ID
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="subtitle2"
                color="common.white"
                sx={{ letterSpacing: 0.5 }}
              >
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="subtitle2"
                color="common.white"
                sx={{ letterSpacing: 0.5 }}
              >
                Types
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon.length === 0 && emptyMessage ? (
            <TableRow>
              <TableCell colSpan={3}>
                <Typography variant="body2" color="text.secondary">
                  {emptyMessage}
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            pokemon.map((p, index) => (
              <PokemonRow
                key={p.id}
                pokemon={p}
                rowIndex={index}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

