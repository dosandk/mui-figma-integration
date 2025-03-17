import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps
} from "@mui/material";

export interface AutocompleteProps<T = any> extends MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined> {
  options: T[];
}

export const Autocomplete = <T extends any>({ options, ...rest }: AutocompleteProps<T>) => {
  return (
    <MuiAutocomplete
      options={options}
      {...rest}
    />
  );
} 