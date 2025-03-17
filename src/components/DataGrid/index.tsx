import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColDef
} from "@mui/x-data-grid";

export interface DataGridProps extends Omit<MuiDataGridProps, 'columns' | 'rows'> {
  columns: GridColDef[];
  rows: any[];
}

export const DataGrid = ({ columns, rows, ...rest }: DataGridProps) => {
  return (
    <MuiDataGrid
      columns={columns}
      rows={rows}
      {...rest}
    />
  );
} 