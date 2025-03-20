import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'color'> {
}

export const TextField = ({ ...props }: TextFieldProps) => {
  return (
    <MuiTextField {...props} />
  );
}; 
