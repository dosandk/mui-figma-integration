import {
  TableFooter as MuiTableFooter,
  TableFooterProps as MuiTableFooterProps,
} from "@mui/material";

export interface TableFooterProps extends MuiTableFooterProps {
  children: React.ReactNode;
}

export const TableFooter = ({ children, ...props }: TableFooterProps) => {
  return (
    <MuiTableFooter {...props} >
      {children}
    </MuiTableFooter>
  );
}; 
