import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Skeleton");

/**
 * Skeleton Component Stories
 * 
 * This file contains all the stories for the Skeleton component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-skeleton/
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
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
      options: ['text', 'rectangular', 'circular', 'rounded'],
      description: 'The variant to use',
    },
    width: {
      control: 'text',
      description: 'The width of the skeleton',
    },
    height: {
      control: 'text',
      description: 'The height of the skeleton',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'false'],
      description: 'The animation to use',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/**
 * Default Story
 * 
 * Shows a basic skeleton with default settings.
 */
export const Default: Story = {
  args: {
    variant: 'text',
  },
};

/**
 * DifferentVariants Story
 * 
 * Shows skeleton components with different variants.
 */
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="rectangular" width={100} height={100} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={100} height={100} />
    </div>
  ),
};

/**
 * DifferentAnimations Story
 * 
 * Demonstrates skeleton components with different animations.
 */
export const DifferentAnimations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Skeleton variant="text" width={200} animation="pulse" />
      <Skeleton variant="text" width={200} animation="wave" />
      <Skeleton variant="text" width={200} animation={false} />
    </div>
  ),
};

/**
 * ContentPlaceholder Story
 * 
 * Shows how to use skeleton as a content placeholder.
 */
export const ContentPlaceholder: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="rectangular" width="100%" height={200} sx={{ my: 2 }} />
      <Skeleton variant="text" width="70%" />
      <Skeleton variant="text" width="50%" />
    </div>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows a skeleton component with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    variant: 'rectangular',
    width: 200,
    height: 100,
    sx: {
      bgcolor: 'primary.main',
      '&::after': {
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
      },
    },
  },
}; 