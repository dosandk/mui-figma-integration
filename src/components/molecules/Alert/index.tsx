import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps
} from "@mui/material";

export interface AlertProps extends MuiAlertProps {
  children: React.ReactNode;
}

export const Alert = ({ children, ...rest }: AlertProps) => {
  return (
    <MuiAlert {...rest}>
      {children}
    </MuiAlert>
  );
}
