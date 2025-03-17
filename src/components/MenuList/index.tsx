import {
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps,
} from "@mui/material";

export interface MenuListProps extends MuiMenuListProps {
  children: React.ReactNode;
}

export const MenuList = ({ children, ...rest }: MenuListProps) => {
  return (
    <MuiMenuList {...rest}>
      {children}
    </MuiMenuList>
  );
}; 