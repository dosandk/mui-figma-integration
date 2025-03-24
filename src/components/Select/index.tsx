import {
  Select as MuiSelect,
  BaseSelectProps as MuiSelectProps,
} from "@mui/material";

export interface SelectProps extends MuiSelectProps {
  children?: React.ReactNode;
}

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <MuiSelect {...props}>
      {children}
    </MuiSelect>
  );
}; 
