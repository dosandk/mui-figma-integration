import {
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps
} from "@mui/material";

export interface TableHeadProps extends MuiTableHeadProps {
  children: React.ReactNode;
}

export const TableHead = ({ children, ...props }: TableHeadProps) => {
  return (
    <MuiTableHead {...props} >
      {children}
    </MuiTableHead>
  );
}; 
