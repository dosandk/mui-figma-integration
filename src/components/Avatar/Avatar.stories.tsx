import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';
import { Box } from '@mui/material';

const meta: Meta<typeof Avatar> = {
  title: 'Molecules/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>U</Avatar>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Avatar
      alt="User"
      src="https://mui.com/static/images/avatar/1.jpg"
    />
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar variant="circular">C</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
    </Box>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar color="primary">P</Avatar>
      <Avatar color="secondary">S</Avatar>
      <Avatar color="error">E</Avatar>
      <Avatar color="info">I</Avatar>
      <Avatar color="success">S</Avatar>
      <Avatar color="warning">W</Avatar>
    </Box>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Avatar
      sx={{
        width: 100,
        height: 100,
        bgcolor: 'primary.main',
        '&:hover': {
          bgcolor: 'secondary.main',
        },
      }}
    >
      CS
    </Avatar>
  ),
};

export const WithError: Story = {
  render: () => (
    <Avatar
      alt="User"
      src="invalid-image.jpg"
      onError={(e) => {
        console.log('Image failed to load');
      }}
    >
      U
    </Avatar>
  ),
};

export const WithClickHandler: Story = {
  render: () => (
    <Avatar
      onClick={() => {
        console.log('Avatar clicked');
      }}
      sx={{ cursor: 'pointer' }}
    >
      C
    </Avatar>
  ),
}; 