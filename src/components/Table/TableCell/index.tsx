import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps
} from "@mui/material";

export interface TableCellProps extends MuiTableCellProps {
  children: React.ReactNode;
}

export const TableCell = ({ children, ...props }: TableCellProps) => {
  return (
    <MuiTableCell {...props} >
      {children}
    </MuiTableCell>
  );
}; 
