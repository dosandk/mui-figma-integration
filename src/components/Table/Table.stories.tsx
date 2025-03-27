import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { TableCell, TableRow } from '@mui/material';

import { Table } from './index';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Table");

/**
 * Table Component Stories
 * 
 * This file contains all the stories for the Table component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-table/
 */
const meta: Meta<typeof Table> = {
  title: "Organisms/Table",
  component: Table,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
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

type Story = StoryObj<typeof Table>;

const Template: StoryFn = (props) => {
  return (
    <Table {...props}>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>2</TableCell>
        <TableCell>3</TableCell>
      </TableRow>
    </Table>
  );
};

export const DefaultTable: Story = {
  render: Template,
  args: {},
};

// TODO: implement other stories
