import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem,
  MenuList,
  Divider,
} from "@mui/material";

export interface MenuProps extends MuiMenuProps {
  children: React.ReactNode;
}

export const Menu = ({ children, ...rest }: MenuProps) => {
  return (
    <MuiMenu {...rest}>
      {children}
    </MuiMenu>
  );
};

export {
  MenuItem,
  MenuList,
  Divider as MenuDivider,
}; 