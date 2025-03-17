import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';
import { Box } from '@mui/material';

/**
 * Avatar Component Stories
 * 
 * This file contains all the stories for the Avatar component, showcasing different variants, colors, and interactive features.
 * 
 * https://mui.com/material-ui/react-avatar/
 */
const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
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

/**
 * Default Story
 * 
 * Shows a basic avatar with a single letter.
 */
export const Default: Story = {
  render: () => (
    <Avatar>U</Avatar>
  ),
};

/**
 * WithImage Story
 * 
 * Demonstrates an avatar with an image source.
 */
export const WithImage: Story = {
  render: () => (
    <Avatar
      alt="User"
      src="https://mui.com/static/images/avatar/1.jpg"
    />
  ),
};

/**
 * DifferentVariants Story
 * 
 * Shows the three available avatar variants: circular, rounded, and square.
 */
export const DifferentVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar variant="circular">C</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
    </Box>
  ),
};

/**
 * DifferentColors Story
 * 
 * Demonstrates avatars with different theme colors.
 */
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

/**
 * WithCustomStyling Story
 * 
 * Shows an avatar with custom styling and hover effects.
 */
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

/**
 * WithError Story
 * 
 * Demonstrates an avatar with error handling for failed image loading.
 */
export const WithError: Story = {
  render: () => (
    <Avatar
      alt="User"
      src="invalid-image.jpg"
      onError={() => {
        console.log('Image failed to load');
      }}
    >
      U
    </Avatar>
  ),
};

/**
 * WithClickHandler Story
 * 
 * Shows an avatar with click interaction.
 */
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