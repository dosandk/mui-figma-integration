import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
} from "@mui/material";

export interface AlertProps extends Omit<MuiAlertProps, 'color'> {
  color?: 'error' | 'warning' | 'info' | 'success';
  severity?: 'error' | 'warning' | 'info' | 'success';
  variant?: 'filled' | 'outlined' | 'standard';
  onClose?: (event: React.SyntheticEvent) => void;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Alert = ({
  color = 'info',
  severity = 'info',
  variant = 'standard',
  onClose,
  action,
  icon,
  children,
  ...rest
}: AlertProps) => {
  return (
    <MuiAlert
      color={color}
      severity={severity}
      variant={variant}
      onClose={onClose}
      action={action}
      icon={icon}
      {...rest}
    >
      {children}
    </MuiAlert>
  );
};
