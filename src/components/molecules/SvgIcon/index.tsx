import { SvgIcon as MuiSvgIcon, SvgIconOwnProps as MuiSvgIconOwnProps } from '@mui/material';

export interface SvgIconProps extends MuiSvgIconOwnProps {
  children?: React.ReactNode;
};

export const SvgIconButton = ({ children, ...rest }: SvgIconProps) => (
  <MuiSvgIcon {...rest}>{children}</MuiSvgIcon>
);
