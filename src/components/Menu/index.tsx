import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
} from "@mui/material";

export interface MenuProps extends MuiMenuProps {
  children: React.ReactNode;
}

export const Menu = ({ children, ...props }: MenuProps) => {
  return (
    <MuiMenu {...props}>
      {children}
    </MuiMenu>
  );
};

