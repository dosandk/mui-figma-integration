import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './index';

/**
 * Skeleton Component Stories
 * 
 * This file contains all the stories for the Skeleton component, showcasing different loading states and animations.
 * 
 * https://mui.com/material-ui/react-skeleton/
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rectangular', 'circular'],
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
      options: ['pulse', 'wave', false],
      description: 'The animation to use',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      description: 'The color of the component',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

/**
 * Default Story
 * 
 * Shows a basic skeleton component with default settings.
 */
export const Default: Story = {
  render: () => <Skeleton />,
};

/**
 * TextVariant Story
 * 
 * Demonstrates skeleton components in text variant with different widths.
 */
export const TextVariant: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="80%" />
    </div>
  ),
};

/**
 * RectangularVariant Story
 * 
 * Shows skeleton components in rectangular variant for image placeholders.
 */
export const RectangularVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
  ),
};

/**
 * CircularVariant Story
 * 
 * Demonstrates skeleton components in circular variant for avatar placeholders.
 */
export const CircularVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={60} height={60} />
    </div>
  ),
};

/**
 * DifferentAnimations Story
 * 
 * Shows skeleton components with different animation styles: pulse, wave, and no animation.
 */
export const DifferentAnimations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Skeleton variant="text" animation="pulse" />
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="text" animation={false} />
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Demonstrates skeleton components with various theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Skeleton variant="text" color="primary" />
      <Skeleton variant="text" color="secondary" />
      <Skeleton variant="text" color="success" />
      <Skeleton variant="text" color="error" />
      <Skeleton variant="text" color="info" />
      <Skeleton variant="text" color="warning" />
      <Skeleton variant="text" color="inherit" />
    </div>
  ),
};

/**
 * CardSkeleton Story
 * 
 * Shows a complete card skeleton layout with image and text placeholders.
 */
export const CardSkeleton: Story = {
  render: () => (
    <div style={{ width: 300, padding: 16, border: '1px solid #e0e0e0', borderRadius: 8 }}>
      <Skeleton variant="rectangular" height={140} />
      <div style={{ padding: 16 }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  ),
};

/**
 * AvatarWithText Story
 * 
 * Demonstrates a skeleton layout combining circular avatar with text placeholders.
 */
export const AvatarWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Skeleton variant="circular" width={40} height={40} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  ),
};

/**
 * CustomStyle Story
 * 
 * Shows a skeleton component with custom styling and gradient animation.
 */
export const CustomStyle: Story = {
  render: () => (
    <Skeleton
      variant="rectangular"
      width={200}
      height={100}
      sx={{
        borderRadius: 2,
        bgcolor: 'primary.main',
        '&::after': {
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        },
      }}
    />
  ),
}; 