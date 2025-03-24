import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from "@mui/material";

export interface SnackbarProps extends MuiSnackbarProps { }

export const Snackbar = ({ ...props }: SnackbarProps) => {
  return (
    <MuiSnackbar {...props} />
  );
}; 
