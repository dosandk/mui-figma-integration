import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
  Alert,
  AlertProps,
} from "@mui/material";

export interface SnackbarProps extends Omit<MuiSnackbarProps, 'color'> {
  open: boolean;
  message?: React.ReactElement;
  color?: 'success' | 'info' | 'warning' | 'error';
  severity?: 'success' | 'info' | 'warning' | 'error';
  autoHideDuration?: number;
  onClose?: (event: React.SyntheticEvent | Event, reason?: string) => void;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  AlertProps?: Omit<AlertProps, 'severity' | 'onClose'>;
}

export const Snackbar = ({
  open,
  message,
  color = 'success',
  severity = 'success',
  autoHideDuration = 6000,
  onClose,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  },
  AlertProps,
  ...rest
}: SnackbarProps) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      {...rest}
    >
      {message && (
        <Alert
          onClose={onClose}
          severity={severity}
          color={color}
          {...AlertProps}
        >
          {message}
        </Alert>
      )}
    </MuiSnackbar>
  );
}; 