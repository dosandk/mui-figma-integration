import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './index';
import { useState } from 'react';
import { Button } from '@mui/material';

interface Data {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const meta: Meta<typeof Table<Data>> = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: 'number',
    },
    rowsPerPage: {
      control: 'number',
    },
    order: {
      control: 'select',
      options: ['asc', 'desc'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table<Data>>;

const createData = (
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data => ({
  id,
  name,
  calories,
  fat,
  carbs,
  protein,
});

const defaultRows = [
  createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
];

const defaultColumns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'calories', label: 'Calories', minWidth: 100, align: 'right' as const },
  { id: 'fat', label: 'Fat (g)', minWidth: 100, align: 'right' as const },
  { id: 'carbs', label: 'Carbs (g)', minWidth: 100, align: 'right' as const },
  { id: 'protein', label: 'Protein (g)', minWidth: 100, align: 'right' as const },
];

const TableWithState = ({ order, ...rest }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState<keyof Data>('name');

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property: keyof Data) => {
    setOrderBy(property);
  };

  return (
    <Table
      columns={defaultColumns}
      rows={defaultRows}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      orderBy={orderBy}
      order={order}
      onRequestSort={handleRequestSort}
      {...rest}
    />
  );
};

export const Default: Story = {
  render: () => <TableWithState />,
};

export const WithCustomFormatting: Story = {
  render: () => (
    <TableWithState
      columns={[
        ...defaultColumns,
        {
          id: 'calories',
          label: 'Calories',
          minWidth: 100,
          align: 'right' as const,
          format: (value: number) => `${value.toFixed(1)} kcal`,
        },
      ]}
    />
  ),
};

export const WithCustomRendering: Story = {
  render: () => (
    <TableWithState
      columns={[
        ...defaultColumns,
        {
          id: 'actions',
          label: 'Actions',
          minWidth: 100,
          render: (row: Data) => (
            <Button
              variant="contained"
              size="small"
              onClick={() => console.log('Edit row:', row.id)}
            >
              Edit
            </Button>
          ),
        },
      ]}
    />
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <TableWithState
      TableContainerProps={{
        sx: { maxHeight: 440 },
      }}
      TableHeadProps={{
        sx: { backgroundColor: 'primary.main' },
      }}
      TableCellProps={{
        sx: { color: 'white' },
      }}
    />
  ),
};

export const WithCustomPagination: Story = {
  render: () => (
    <TableWithState
      rowsPerPage={5}
      TablePaginationProps={{
        rowsPerPageOptions: [5, 10, 25, 50],
      }}
    />
  ),
}; 