import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material";

export interface MenuItemProps extends MuiMenuItemProps {
  children: React.ReactNode;
}

export const MenuItem = ({ children, ...rest }: MenuItemProps) => {
  return (
    <MuiMenuItem {...rest}>
      {children}
    </MuiMenuItem>
  );
}; 