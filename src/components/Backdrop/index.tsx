import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps
} from "@mui/material";

export interface BackdropProps extends MuiBackdropProps {
  children?: React.ReactNode;
  open?: () => void;
}

export const Backdrop = ({ children, ...rest }: BackdropProps) => {
  return (
    <MuiBackdrop {...rest}>
      {children}
    </MuiBackdrop>
  );
} 
