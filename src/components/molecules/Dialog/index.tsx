import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  fullScreen?: boolean;
  PaperProps?: MuiDialogProps['PaperProps'];
  TransitionComponent?: MuiDialogProps['TransitionComponent'];
  TransitionProps?: MuiDialogProps['TransitionProps'];
  sx?: MuiDialogProps['sx'];
}

export const Dialog = ({ 
  open, 
  onClose, 
  title, 
  content, 
  actions,
  children,
  ...rest 
}: DialogProps) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      {...rest}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && <DialogContent>{content}</DialogContent>}
      {children}
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
}; 