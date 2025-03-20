import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from "@mui/material";

export interface PopoverProps extends MuiPopoverProps {
  children: React.ReactNode;
}

export const Popover = ({ children, ...rest }: PopoverProps) => {
  return (
    <MuiPopover {...rest}>
      {children}
    </MuiPopover>
  );
}; 
