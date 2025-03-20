import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Home, Person, Settings } from "@mui/icons-material";

export interface DrawerProps {
  children?: React.ReactNode;
}

export const Drawer = ({ children, ...rest }: DrawerProps) => {
  return (
    <MuiDrawer {...rest} >
      {children}
    </MuiDrawer>
  );
}; 
