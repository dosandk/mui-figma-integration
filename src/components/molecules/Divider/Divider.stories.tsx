import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof Divider> = {
  title: 'Molecules/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'The alignment of the divider text',
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
      description: 'The variant to use',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The divider orientation',
    },
    flexItem: {
      control: 'boolean',
      description: 'If true, the divider will be a flex item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    children: 'OR',
  },
};

export const DifferentTextAlignments: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography>Left aligned text</Typography>
      <Divider textAlign="left">Left</Divider>
      <Typography>Center aligned text</Typography>
      <Divider textAlign="center">Center</Divider>
      <Typography>Right aligned text</Typography>
      <Divider textAlign="right">Right</Divider>
    </Box>
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography>Full Width</Typography>
      <Divider variant="fullWidth" />
      <Typography>Inset</Typography>
      <Divider variant="inset" />
      <Typography>Middle</Typography>
      <Divider variant="middle" />
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Box sx={{ display: 'flex', height: 100 }}>
      <Typography>Left Content</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Right Content</Typography>
    </Box>
  ),
};

export const WithCustomStyle: Story = {
  args: {
    children: 'Styled Divider',
    sx: {
      '&::before, &::after': {
        borderColor: 'primary.main',
      },
      '& .MuiDivider-wrapper': {
        color: 'primary.main',
      },
    },
  },
}; 