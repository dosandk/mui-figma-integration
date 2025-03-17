import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from "@mui/material";

export interface PopoverProps extends MuiPopoverProps {
  children: React.ReactNode;
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

export const Popover = ({
  children,
  open,
  anchorEl,
  onClose,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
  },
  ...rest
}: PopoverProps) => {
  return (
    <MuiPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...rest}
    >
      {children}
    </MuiPopover>
  );
}; 