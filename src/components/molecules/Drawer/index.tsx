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
  open: boolean;
  onClose: () => void;
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  variant?: 'permanent' | 'persistent' | 'temporary';
  elevation?: number;
  children?: React.ReactNode;
  PaperProps?: MuiDrawerProps['PaperProps'];
  sx?: MuiDrawerProps['sx'];
}

export const Drawer = ({ 
  open, 
  onClose, 
  anchor = 'left',
  variant = 'temporary',
  elevation = 16,
  children,
  PaperProps,
  sx,
  ...rest 
}: DrawerProps) => {
  return (
    <MuiDrawer
      open={open}
      onClose={onClose}
      anchor={anchor}
      variant={variant}
      elevation={elevation}
      PaperProps={PaperProps}
      sx={sx}
      {...rest}
    >
      {children}
    </MuiDrawer>
  );
}; 