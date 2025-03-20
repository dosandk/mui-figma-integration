import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps
} from "@mui/material";

export interface AutocompleteProps extends MuiAutocompleteProps { }

export const Autocomplete = (props: AutocompleteProps) => {
  return (
    <MuiAutocomplete {...props} />
  );
} 
