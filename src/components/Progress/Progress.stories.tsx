import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress } from '@mui/material';
import { getFigmaPath } from "../figma.config";
import { Box } from '@mui/material';

const FIGMA_COMPONENT_URL = getFigmaPath("Progress");

/**
 * Progress Component Stories
 * 
 * This file contains all the stories for the Progress component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-progress/
 */
const meta: Meta<typeof LinearProgress> = {
  title: 'Atoms/Progress',
  component: LinearProgress,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate', 'buffer', 'query'],
      description: 'The variant to use',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    value: {
      control: 'number',
      description: 'The value of the progress indicator for the determinate and buffer variants',
    },
    valueBuffer: {
      control: 'number',
      description: 'The value for the buffer variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

/**
 * Default Story
 * 
 * Shows a basic progress indicator with default settings.
 */
export const Default: Story = {
  args: {
    variant: 'determinate',
    value: 60,
  },
};

/**
 * Indeterminate Story
 * 
 * Demonstrates an indeterminate progress indicator.
 */
export const Indeterminate: Story = {
  args: {
    variant: 'indeterminate',
  },
};

/**
 * DifferentColors Story
 * 
 * Shows progress indicators with different colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <LinearProgress variant="determinate" value={60} color="primary" />
      <LinearProgress variant="determinate" value={60} color="secondary" />
      <LinearProgress variant="determinate" value={60} color="error" />
      <LinearProgress variant="determinate" value={60} color="info" />
      <LinearProgress variant="determinate" value={60} color="success" />
      <LinearProgress variant="determinate" value={60} color="warning" />
    </Box>
  ),
};

/**
 * Buffer Story
 * 
 * Shows a buffer progress indicator.
 */
export const Buffer: Story = {
  args: {
    variant: 'buffer',
    value: 60,
    valueBuffer: 80,
  },
};

/**
 * Query Story
 * 
 * Demonstrates a query progress indicator.
 */
export const Query: Story = {
  args: {
    variant: 'query',
  },
};

/**
 * WithCustomStyle Story
 * 
 * Shows a progress indicator with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    variant: 'determinate',
    value: 60,
    sx: {
      height: 10,
      borderRadius: 5,
      backgroundColor: 'grey.200',
      '& .MuiLinearProgress-bar': {
        borderRadius: 5,
        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      },
    },
  },
}; 