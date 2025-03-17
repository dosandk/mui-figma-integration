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

export const Modal = ({
  children,
  open,
  onClose,
  closeAfterTransition = false,
  disableEscapeKeyDown = false,
  disablePortal = false,
  hideBackdrop = false,
  keepMounted = false,
  ...rest
}: ModalProps) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      closeAfterTransition={closeAfterTransition}
      disableEscapeKeyDown={disableEscapeKeyDown}
      disablePortal={disablePortal}
      hideBackdrop={hideBackdrop}
      keepMounted={keepMounted}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      {...rest}
    >
      <Fade in={open}>
        {children}
      </Fade>
    </MuiModal>
  );
}; 