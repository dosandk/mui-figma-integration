import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './index';
import { Link, Typography } from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: 'Custom separator node',
    },
    maxItems: {
      control: 'number',
      description: 'Specifies the maximum number of breadcrumbs to display',
    },
    itemsAfterCollapse: {
      control: 'number',
      description: 'Specifies the maximum number of breadcrumbs to display after the ellipsis',
    },
    itemsBeforeCollapse: {
      control: 'number',
      description: 'Specifies the maximum number of breadcrumbs to display before the ellipsis',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Link color="inherit" href="#">
          Material-UI
        </Link>
        <Link color="inherit" href="#">
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </>
    ),
  },
};

export const WithCustomSeparator: Story = {
  args: {
    separator: <NavigateNextIcon fontSize="small" />,
    children: (
      <>
        <Link color="inherit" href="#">
          Material-UI
        </Link>
        <Link color="inherit" href="#">
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </>
    ),
  },
};

export const WithCollapsedItems: Story = {
  args: {
    maxItems: 2,
    itemsAfterCollapse: 1,
    itemsBeforeCollapse: 1,
    children: (
      <>
        <Link color="inherit" href="#">
          Home
        </Link>
        <Link color="inherit" href="#">
          Products
        </Link>
        <Link color="inherit" href="#">
          Categories
        </Link>
        <Link color="inherit" href="#">
          Electronics
        </Link>
        <Link color="inherit" href="#">
          Smartphones
        </Link>
        <Typography color="text.primary">iPhone 13</Typography>
      </>
    ),
  },
};

export const WithCustomStyle: Story = {
  args: {
    sx: {
      padding: 2,
      backgroundColor: '#f5f5f5',
      borderRadius: 1,
    },
    children: (
      <>
        <Link color="inherit" href="#">
          Material-UI
        </Link>
        <Link color="inherit" href="#">
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </>
    ),
  },
}; 