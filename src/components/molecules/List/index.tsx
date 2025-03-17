import {
  List as MuiList,
  ListProps as MuiListProps,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListSubheader,
  Divider,
} from "@mui/material";

export interface ListProps extends MuiListProps {
  children: React.ReactNode;
}

export const List = ({ children, ...rest }: ListProps) => {
  return (
    <MuiList {...rest}>
      {children}
    </MuiList>
  );
};

export {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListSubheader,
  Divider,
}; 