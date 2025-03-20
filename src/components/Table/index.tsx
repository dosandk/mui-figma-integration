import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableBody,
  TableBodyProps,
  TableCell,
  TableCellProps,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableHeadProps,
  TableRow,
  TableRowProps,
  TablePagination,
  TablePaginationProps,
  TableSortLabel,
  TableSortLabelProps,
} from "@mui/material";

export interface TableColumn<T> {
  id: keyof T | string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
  format?: (value: any) => string | number;
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
}

export interface TableProps<T> extends Omit<MuiTableProps, 'children'> {
  columns: TableColumn<T>[];
  rows: T[];
  page?: number;
  rowsPerPage?: number;
  totalRows?: number;
  onPageChange?: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  orderBy?: keyof T | null;
  order?: 'asc' | 'desc';
  onRequestSort?: (property: keyof T) => void;
  TableContainerProps?: Omit<TableContainerProps, 'children'>;
  TableHeadProps?: Omit<TableHeadProps, 'children'>;
  TableBodyProps?: Omit<TableBodyProps, 'children'>;
  TableRowProps?: Omit<TableRowProps, 'children'>;
  TableCellProps?: Omit<TableCellProps, 'children'>;
  TablePaginationProps?: Omit<TablePaginationProps, 'component'>;
}

export const Table = <T extends { id: string | number }>({
  columns,
  rows,
  page = 0,
  rowsPerPage = 10,
  totalRows = rows.length,
  onPageChange,
  onRowsPerPageChange,
  orderBy,
  order = 'asc',
  onRequestSort,
  TableContainerProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TablePaginationProps,
  ...rest
}: TableProps<T>) => {
  const handleSort = (property: keyof T) => () => {
    onRequestSort?.(property);
  };

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onPageChange?.(event, newPage);
  };

  return (
    <TableContainer {...TableContainerProps}>
      <MuiTable {...rest}>
        <TableHead {...TableHeadProps}>
          <TableRow {...TableRowProps}>
            {columns.map((column) => (
              <TableCell
                key={column.id.toString()}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                {...TableCellProps}
              >
                {column.sortable ? (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={handleSort(column.id as keyof T)}
                  >
                    {column.label}
                  </TableSortLabel>
                ) : (
                  column.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody {...TableBodyProps}>
          {rows.map((row) => (
            <TableRow key={row.id} {...TableRowProps}>
              {columns.map((column) => (
                <TableCell
                  key={column.id.toString()}
                  align={column.align}
                  {...TableCellProps}
                >
                  {column.render
                    ? column.render(row)
                    : column.format
                      ? column.format(row[column.id as keyof T])
                      : String(row[column.id as keyof T])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        {...TablePaginationProps}
      />
    </TableContainer>
  );
}; 
