import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from "@mui/material";

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
}

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  return (
    <MuiCheckbox {...rest} />
  );
} 