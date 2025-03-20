import {
  AppBar as MuiAppBar,
  AppBarOwnProps as MuiAppBarProps
} from "@mui/material";

export interface AppBarProps extends MuiAppBarProps {
  children?: React.ReactNode;
}

export const AppBar = ({ children, ...rest }: AppBarProps) => {
  return (
    <MuiAppBar {...rest}>
      {children}
    </MuiAppBar>
  );
} 
