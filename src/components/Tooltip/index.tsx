import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";

export interface TooltipProps extends MuiTooltipProps {
  children: React.ReactElement;
}

export const Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <MuiTooltip {...props}>
      {children}
    </MuiTooltip>
  );
}; 
