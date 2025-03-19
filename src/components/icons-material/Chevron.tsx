import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { SvgIconProps } from '@mui/material/SvgIcon';

export interface IconProps extends SvgIconProps {
  // TODO: add "up" and "down" directions
  direction?: 'left' | 'right';
};

export const Chevron = ({ direction, ...rest }: IconProps) => {
  if (direction === "left") {
    return <ChevronLeft {...rest} />;
  }

  if (direction === "right") {
    return <ChevronRight {...rest} />;
  }
}

