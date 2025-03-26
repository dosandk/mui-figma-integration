import {
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps
} from '@mui/material';

export interface TableRowProps extends MuiTableRowProps {
  children: React.ReactNode;
}

export const TableRow = ({ children, ...props }: TableRowProps) => {
  return (
    <MuiTableRow {...props}>
      {children}
    </MuiTableRow>
  );
}; 
