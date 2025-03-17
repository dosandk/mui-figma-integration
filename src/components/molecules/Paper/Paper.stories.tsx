import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import { Paper } from './index';

const meta: Meta<typeof Paper> = {
  title: 'Molecules/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Shadow depth, corresponds to dp in the spec',
    },
    square: {
      control: 'boolean',
      description: 'If true, rounded corners are disabled',
    },
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: 'The variant to use',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    children: (
      <Box p={3}>
        <Typography variant="h6">Default Paper</Typography>
        <Typography>
          This is a default paper with elevation 1 and rounded corners.
        </Typography>
      </Box>
    ),
  },
};

export const DifferentElevations: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {[0, 1, 2, 4, 8, 16, 24].map((elevation) => (
        <Paper key={elevation} elevation={elevation}>
          <Box p={3}>
            <Typography variant="h6">Elevation {elevation}</Typography>
            <Typography>Paper with elevation {elevation}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  ),
};

export const Square: Story = {
  args: {
    square: true,
    children: (
      <Box p={3}>
        <Typography variant="h6">Square Paper</Typography>
        <Typography>
          This paper has square corners instead of rounded ones.
        </Typography>
      </Box>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <Box p={3}>
        <Typography variant="h6">Outlined Paper</Typography>
        <Typography>
          This paper uses an outlined variant instead of elevation.
        </Typography>
      </Box>
    ),
  },
};

export const WithCustomStyle: Story = {
  args: {
    sx: {
      bgcolor: 'primary.main',
      color: 'primary.contrastText',
      p: 3,
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        bgcolor: 'primary.dark',
        transform: 'scale(1.02)',
      },
    },
    children: (
      <>
        <Typography variant="h6">Styled Paper</Typography>
        <Typography>
          This paper has custom styling with hover effects.
        </Typography>
      </>
    ),
  },
};

export const WithContent: Story = {
  render: () => (
    <Paper sx={{ maxWidth: 600 }}>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Article Title
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Published on January 1, 2024
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Typography>
        <Typography>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Paper>
  ),
}; 