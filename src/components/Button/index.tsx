import {
  Button as MuiButton,
  ButtonOwnProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  children?: React.ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => (
  <MuiButton {...props}>{children}</MuiButton>
);
