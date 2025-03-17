import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationProps as MuiBottomNavigationProps
} from "@mui/material";

export interface BottomNavigationProps extends MuiBottomNavigationProps {
  children: React.ReactNode;
}

export const BottomNavigation = ({ children, ...rest }: BottomNavigationProps) => {
  return (
    <MuiBottomNavigation {...rest}>
      {children}
    </MuiBottomNavigation>
  );
} 