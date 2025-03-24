import {
  Table as MuiTable,
  TableProps as MuiTableProps,
} from "@mui/material";


export interface TableProps extends MuiTableProps {
  children: React.ReactNode;
}

// TODO: implement sub components
export const Table = ({ children, ...props }: TableProps) => {
  return (
    <MuiTable {...props}>{children}</MuiTable>
  );
}; 
