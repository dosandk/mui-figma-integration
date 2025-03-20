import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from "@mui/material";

export interface DialogProps extends MuiDialogProps {
  children: React.ReactNode;
}

export const Dialog = ({ children, ...rest }: DialogProps) => {
  return (
    <MuiDialog {...rest}>
      {children}
    </MuiDialog>
  );
}; 
