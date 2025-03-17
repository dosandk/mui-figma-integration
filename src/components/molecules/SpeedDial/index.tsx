import {
  SpeedDial as MuiSpeedDial,
  SpeedDialProps as MuiSpeedDialProps,
  SpeedDialAction,
  SpeedDialActionProps,
} from "@mui/material";

export interface SpeedDialActionItem extends Omit<SpeedDialActionProps, 'onClick'> {
  name: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface SpeedDialProps extends Omit<MuiSpeedDialProps, 'onClick'> {
  open?: boolean;
  icon: React.ReactNode;
  actions: SpeedDialActionItem[];
  onClick?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
  direction?: 'up' | 'down' | 'left' | 'right';
  ariaLabel: string;
  hidden?: boolean;
  transitionDuration?: number | { enter: number; exit: number };
}

export const SpeedDial = ({
  open,
  icon,
  actions,
  onClick,
  onClose,
  onOpen,
  direction = 'up',
  ariaLabel,
  hidden = false,
  transitionDuration = 200,
  ...rest
}: SpeedDialProps) => {
  return (
    <MuiSpeedDial
      open={open}
      icon={icon}
      onClick={onClick}
      onClose={onClose}
      onOpen={onOpen}
      direction={direction}
      ariaLabel={ariaLabel}
      hidden={hidden}
      transitionDuration={transitionDuration}
      {...rest}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
 