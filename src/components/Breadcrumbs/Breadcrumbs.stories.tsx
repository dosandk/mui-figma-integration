import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './index';
import { Link, Typography } from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

/**
 * Breadcrumbs Component Stories
 * 
 * This file contains all the stories for the Breadcrumbs component, showcasing different separators, collapsed items, and styling options.
 * 
 * https://mui.com/material-ui/react-breadcrumbs/
 */
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

/**
 * Default Story
 * 
 * Shows a basic breadcrumb navigation with default separator.
 */
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

/**
 * WithCustomSeparator Story
 * 
 * Demonstrates breadcrumbs with a custom icon separator.
 */
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

/**
 * WithCollapsedItems Story
 * 
 * Shows breadcrumbs with collapsed items and ellipsis.
 */
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

/**
 * WithCustomStyle Story
 * 
 * Demonstrates breadcrumbs with custom styling applied.
 */
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