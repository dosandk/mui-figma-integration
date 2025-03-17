import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './index';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

/**
 * Rating Component Stories
 * 
 * This file contains all the stories for the Rating component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-rating/
 */
const meta: Meta<typeof Rating> = {
  title: 'Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The rating value',
    },
    precision: {
      control: 'number',
      description: 'The granularity with which the rating can change',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      description: 'The color of the component',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the rating will be read-only',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the rating will be disabled',
    },
    max: {
      control: 'number',
      description: 'Maximum rating',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

/**
 * Default Story
 * 
 * Shows a basic rating component with default settings.
 */
export const Default: Story = {
  render: () => <Rating />,
};

/**
 * WithValue Story
 * 
 * Demonstrates a rating component with a specific value.
 */
export const WithValue: Story = {
  render: () => <Rating value={3.5} />,
};

/**
 * DifferentSizes Story
 * 
 * Shows rating components in different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating size="small" value={3} />
      <Rating size="medium" value={3} />
      <Rating size="large" value={3} />
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Demonstrates rating components with various theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating color="primary" value={3} />
      <Rating color="secondary" value={3} />
      <Rating color="success" value={3} />
      <Rating color="error" value={3} />
      <Rating color="info" value={3} />
      <Rating color="warning" value={3} />
    </div>
  ),
};

/**
 * ReadOnly Story
 * 
 * Shows read-only rating components with different values.
 */
export const ReadOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating value={3} readOnly />
      <Rating value={3.5} readOnly />
    </div>
  ),
};

/**
 * Disabled Story
 * 
 * Demonstrates disabled rating components.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating value={3} disabled />
      <Rating value={3.5} disabled />
    </div>
  ),
};

/**
 * CustomMax Story
 * 
 * Shows a rating component with a custom maximum value.
 */
export const CustomMax: Story = {
  render: () => <Rating max={10} value={7} />,
};

/**
 * CustomPrecision Story
 * 
 * Demonstrates a rating component with custom precision for half-stars.
 */
export const CustomPrecision: Story = {
  render: () => <Rating precision={0.5} value={3.5} />,
};

/**
 * CustomIcons Story
 * 
 * Shows a rating component with custom heart icons.
 */
export const CustomIcons: Story = {
  render: () => (
    <Rating
      icon={<Favorite />}
      emptyIcon={<FavoriteBorder />}
      value={3}
      sx={{ color: 'error.main' }}
    />
  ),
};

/**
 * CustomStyle Story
 * 
 * Demonstrates a rating component with custom styling for filled and hover states.
 */
export const CustomStyle: Story = {
  render: () => (
    <Rating
      value={4}
      sx={{
        '& .MuiRating-iconFilled': {
          color: 'success.main',
        },
        '& .MuiRating-iconHover': {
          color: 'success.light',
        },
      }}
    />
  ),
}; 