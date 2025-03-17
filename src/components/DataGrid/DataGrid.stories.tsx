import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from './index';
import { GridColDef, GridValueGetter, GridCellParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column is calculated using firstName and lastName',
    sortable: false,
    width: 160,
    // TODO: temp
    // valueGetter: (params: GridCellParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

/**
 * DataGrid Component Stories
 * 
 * This file contains all the stories for the DataGrid component, showcasing different features like sorting, filtering, pagination, and row selection.
 * 
 * https://mui.com/x/react-data-grid/
 */
const meta: Meta<typeof DataGrid> = {
  title: 'Organisms/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    autoHeight: {
      control: 'boolean',
      description: 'If true, the grid height is dynamic and follows the number of rows',
    },
    checkboxSelection: {
      control: 'boolean',
      description: 'If true, the grid will show a checkbox column for row selection',
    },
    disableColumnMenu: {
      control: 'boolean',
      description: 'If true, the column menu is disabled',
    },
    disableColumnSelector: {
      control: 'boolean',
      description: 'If true, the column selector is disabled',
    },
    disableDensitySelector: {
      control: 'boolean',
      description: 'If true, the density selector is disabled',
    },
    disableRowSelectionOnClick: {
      control: 'boolean',
      description: 'If true, the row selection is disabled when clicking on the row',
    },
    hideFooter: {
      control: 'boolean',
      description: 'If true, the footer is hidden',
    },
    hideFooterPagination: {
      control: 'boolean',
      description: 'If true, the pagination footer is hidden',
    },
    hideFooterSelectedRowCount: {
      control: 'boolean',
      description: 'If true, the selected row count footer is hidden',
    },
    initialState: {
      control: 'object',
      description: 'The initial state of the grid',
    },
    pageSizeOptions: {
      control: 'select',
      description: 'The options for the rows per page dropdown',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

/**
 * Default Story
 * 
 * Shows a basic data grid with default configuration.
 */
export const Default: Story = {
  args: {
    columns,
    rows,
  },
};

/**
 * WithCheckboxSelection Story
 * 
 * Demonstrates a data grid with row selection enabled via checkboxes.
 */
export const WithCheckboxSelection: Story = {
  args: {
    columns,
    rows,
    checkboxSelection: true,
  },
};

/**
 * WithColumnMenu Story
 * 
 * Shows a data grid with column menu functionality enabled.
 */
export const WithColumnMenu: Story = {
  args: {
    columns,
    rows,
    disableColumnMenu: false,
  },
};

/**
 * WithPagination Story
 * 
 * Demonstrates a data grid with pagination controls.
 */
export const WithPagination: Story = {
  args: {
    columns,
    rows,
    initialState: {
      pagination: {
        paginationModel: { pageSize: 5 },
      },
    },
    pageSizeOptions: [5, 10, 25],
  },
};

/**
 * WithoutFooter Story
 * 
 * Shows a data grid without the footer component.
 */
export const WithoutFooter: Story = {
  args: {
    columns,
    rows,
    hideFooter: true,
  },
};

/**
 * WithCustomStyle Story
 * 
 * Demonstrates a data grid with custom styling applied to cells and headers.
 */
export const WithCustomStyle: Story = {
  args: {
    columns,
    rows,
    sx: {
      height: 400,
      width: '100%',
      '& .MuiDataGrid-cell': {
        borderColor: 'primary.main',
      },
      '& .MuiDataGrid-columnHeaders': {
        backgroundColor: 'primary.main',
        color: 'white',
      },
    },
  },
};

/**
 * WithEditableCells Story
 * 
 * Shows a data grid with editable cells based on custom conditions.
 */
export const WithEditableCells: Story = {
  args: {
    columns,
    rows,
    isCellEditable: (params: GridCellParams) => params.row.age !== null,
  },
}; 
