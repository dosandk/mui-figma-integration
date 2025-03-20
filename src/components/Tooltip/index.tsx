import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";

export interface TooltipProps extends Omit<MuiTooltipProps, 'color'> {
  title: string | React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  arrow?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  enterNextDelay?: number;
  open?: boolean;
  onOpen?: (event: Event | React.SyntheticEvent) => void;
  onClose?: (event: Event | React.SyntheticEvent) => void;
  children: React.ReactElement;
  PopperProps?: MuiTooltipProps['PopperProps'];
  TransitionProps?: MuiTooltipProps['TransitionProps'];
}

export const Tooltip = ({
  title,
  color = 'primary',
  placement = 'bottom',
  arrow = false,
  enterDelay = 200,
  leaveDelay = 0,
  enterNextDelay = 0,
  open,
  onOpen,
  onClose,
  children,
  PopperProps,
  TransitionProps,
  ...rest
}: TooltipProps) => {
  return (
    <MuiTooltip
      title={title}
      color={color}
      placement={placement}
      arrow={arrow}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      enterNextDelay={enterNextDelay}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      PopperProps={PopperProps}
      TransitionProps={TransitionProps}
      {...rest}
    >
      {children}
    </MuiTooltip>
  );
}; 
