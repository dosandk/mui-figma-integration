import {
  List as MuiList,
  ListProps as MuiListProps,
} from "@mui/material";

export interface ListProps extends MuiListProps {
  children: React.ReactNode;
}

export const List = ({ children, ...props }: ListProps) => {
  return (
    <MuiList {...props}>
      {children}
    </MuiList>
  );
};

