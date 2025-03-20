import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './index';
import { Box, Typography } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Container");

/**
 * Container Component Stories
 * 
 * This file contains all the stories for the Container component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-container/
 */
const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
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

/**
 * Sample content component for container stories
 */
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

/**
 * Default Story
 * 
 * Shows a basic container with default settings.
 */
export const Default: Story = {
  args: {
    children: <Content />,
  },
};

/**
 * Fixed Story
 * 
 * Demonstrates a container with fixed max-width based on breakpoint.
 */
export const Fixed: Story = {
  args: {
    fixed: true,
    children: <Content />,
  },
};

/**
 * WithoutGutters Story
 * 
 * Shows a container without horizontal padding.
 */
export const WithoutGutters: Story = {
  args: {
    disableGutters: true,
    children: <Content />,
  },
};

/**
 * DifferentMaxWidths Story
 * 
 * Demonstrates containers with various max-width options.
 */
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

/**
 * WithCustomStyle Story
 * 
 * Shows a container with custom styling.
 */
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