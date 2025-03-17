import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './index';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof Container> = {
  title: 'Molecules/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: 'Determine the max-width of the container',
    },
    fixed: {
      control: 'boolean',
      description: 'Set the max-width to match the min-width of the current breakpoint',
    },
    disableGutters: {
      control: 'boolean',
      description: 'If true, the left and right padding is removed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

const Content = () => (
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', p: 2 }}>
    <Typography variant="h4" gutterBottom>
      Container Content
    </Typography>
    <Typography variant="body1">
      This is a sample content inside the container. The container helps to center and constrain the content width.
    </Typography>
  </Box>
);

export const Default: Story = {
  args: {
    children: <Content />,
  },
};

export const Fixed: Story = {
  args: {
    fixed: true,
    children: <Content />,
  },
};

export const WithoutGutters: Story = {
  args: {
    disableGutters: true,
    children: <Content />,
  },
};

export const DifferentMaxWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', p: 2 }}>
          <Typography variant="h6">Extra Small (xs)</Typography>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', p: 2 }}>
          <Typography variant="h6">Small (sm)</Typography>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', p: 2 }}>
          <Typography variant="h6">Medium (md)</Typography>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', p: 2 }}>
          <Typography variant="h6">Large (lg)</Typography>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', p: 2 }}>
          <Typography variant="h6">Extra Large (xl)</Typography>
        </Box>
      </Container>
    </div>
  ),
  parameters: {
    controls: { exclude: ['maxWidth'] },
  },
};

export const WithCustomStyle: Story = {
  args: {
    sx: {
      bgcolor: '#f5f5f5',
      borderRadius: 2,
      p: 2,
    },
    children: <Content />,
  },
}; 