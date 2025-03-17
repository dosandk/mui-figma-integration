import { Abc as MuiAbc } from "@mui/icons-material";
import { SvgIconProps } from '@mui/material/SvgIcon';

export interface IconProps extends SvgIconProps {
  children?: React.ReactNode;
};

export const Abc = ({ ...rest }: IconProps) => (
  <MuiAbc {...rest} />
);
