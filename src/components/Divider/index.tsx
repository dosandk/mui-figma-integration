import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps
} from "@mui/material";

export interface DividerProps extends MuiDividerProps {
  children?: React.ReactNode;
}

export const Divider = ({ children, ...props }: DividerProps) => {
  return (
    <MuiDivider {...props} >
      {children}
    </MuiDivider>
  );
}; 
