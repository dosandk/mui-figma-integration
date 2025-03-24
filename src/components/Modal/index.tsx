import {
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Backdrop,
  Fade,
} from "@mui/material";

export interface ModalProps extends Omit<MuiModalProps, 'children'> {
  children: React.ReactElement;
  open: boolean;
  onClose: () => void;
  closeAfterTransition?: boolean;
  disableEscapeKeyDown?: boolean;
  disablePortal?: boolean;
  hideBackdrop?: boolean;
  keepMounted?: boolean;
}

export const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <MuiModal {...props}>
      {children}
    </MuiModal>
  );
}; 
