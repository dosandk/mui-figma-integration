import { StarOutlined as MuiStarOutlined } from "@mui/icons-material";
import { SvgIconProps } from '@mui/material/SvgIcon';

export interface IconProps extends SvgIconProps {
  children?: React.ReactNode;
};

export const StarOutlined = ({ ...rest }: IconProps) => (
  <MuiStarOutlined {...rest} />
);
