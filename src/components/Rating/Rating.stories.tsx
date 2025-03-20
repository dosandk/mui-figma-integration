import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Rating");

/**
 * Rating Component Stories
 * 
 * This file contains all the stories for the Rating component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-rating/
 */
const meta: Meta<typeof Rating> = {
  title: 'Atoms/Rating',
  component: Rating,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
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
      description: 'The size of the rating',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the rating will be disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the rating will be read-only',
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
  args: {
    value: 3.5,
  },
};

/**
 * DifferentSizes Story
 * 
 * Shows rating components with different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Rating value={3.5} size="small" />
      <Rating value={3.5} size="medium" />
      <Rating value={3.5} size="large" />
    </div>
  ),
};

/**
 * WithPrecision Story
 * 
 * Demonstrates a rating component with decimal precision.
 */
export const WithPrecision: Story = {
  args: {
    value: 3.5,
    precision: 0.5,
  },
};

/**
 * ReadOnly Story
 * 
 * Shows a read-only rating component.
 */
export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

/**
 * Disabled Story
 * 
 * Shows a disabled rating component.
 */
export const Disabled: Story = {
  args: {
    value: 3.5,
    disabled: true,
  },
};

/**
 * CustomMax Story
 * 
 * Demonstrates a rating component with a custom maximum value.
 */
export const CustomMax: Story = {
  args: {
    value: 7,
    max: 10,
  },
};

/**
 * WithCustomStyle Story
 * 
 * Shows a rating component with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    value: 3.5,
    sx: {
      '& .MuiRating-icon': {
        fontSize: 48,
        color: 'primary.main',
      },
      '& .MuiRating-iconFilled': {
        color: 'secondary.main',
      },
    },
  },
}; 