import {
  TableRow,
  TableCell,
  Avatar,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  spriteUrl: string;
};

type PokemonRowProps = {
  pokemon: Pokemon;
  rowIndex?: number;
};

export function PokemonRow({ pokemon, rowIndex }: PokemonRowProps) {
  return (
    <TableRow
      hover
      sx={(theme) => ({
        bgcolor:
          rowIndex !== undefined && rowIndex % 2 === 1
            ? theme.palette.action.hover
            : "inherit",
      })}
    >
      <TableCell width="10%">
        <Typography variant="body2">#{pokemon.id}</Typography>
      </TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Avatar
            src={pokemon.spriteUrl}
            alt={pokemon.name}
            variant="square"
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              boxShadow: 1,
              bgcolor: "background.default",
            }}
          />
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ textTransform: "capitalize" }}
          >
            {pokemon.name}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {pokemon.types.map((type) => (
            <Chip
              key={type}
              label={type}
              size="small"
              sx={(theme) => ({
                textTransform: "capitalize",
                bgcolor: theme.palette.grey[100],
                borderRadius: 999,
              })}
            />
          ))}
        </Stack>
      </TableCell>
    </TableRow>
  );
}

