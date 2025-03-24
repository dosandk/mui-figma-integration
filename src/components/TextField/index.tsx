import {
  TextField as MuiTextField,
  BaseTextFieldProps
} from "@mui/material";

export interface TextFieldProps extends BaseTextFieldProps { }

export const TextField = ({ ...props }: TextFieldProps) => {
  return (
    <MuiTextField {...props} />
  );
}; 
