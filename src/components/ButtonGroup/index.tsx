import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps
} from "@mui/material";

export interface ButtonGroupProps extends MuiButtonGroupProps {
  children: React.ReactNode;
}

export const ButtonGroup = ({ children, ...rest }: ButtonGroupProps) => {
  return (
    <MuiButtonGroup {...rest}>
      {children}
    </MuiButtonGroup>
  );
} 