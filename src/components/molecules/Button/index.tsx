import {
  Button as MuiButton,
  ButtonOwnProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps { };

export const Button = ({ ...rest }: ButtonProps) => (
  <MuiButton {...rest} />
);
