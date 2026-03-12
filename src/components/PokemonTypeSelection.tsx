import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
  options: string[];
};

export function PokemonTypeSelection({
  selectedType,
  selectType,
  options,
}: PokemonTypeSelectionProps) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="pokemon-type-label" shrink>
        Type
      </InputLabel>
      <Select
        labelId="pokemon-type-label"
        label="Type"
        value={selectedType ?? ""}
        onChange={(event) => {
          const value = event.target.value;
          selectType(value === "" ? undefined : (value as string));
        }}
        displayEmpty
        renderValue={(value) =>
          value === "" ? "All types" : (value as string)
        }
      >
        <MenuItem value="">
          <em>All types</em>
        </MenuItem>
        {options.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

