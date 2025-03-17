import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './index';
import { Delete as DeleteIcon } from '@mui/icons-material';

/**
 * Chip Component Stories
 * 
 * This file contains all the stories for the Chip component, showcasing different variants, colors, sizes, and interactive features.
 * 
 * https://mui.com/material-ui/react-chip/
 */
const meta: Meta<typeof Chip> = {
  title: 'Molecules/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'The variant to use',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component will be disabled',
    },
    clickable: {
      control: 'boolean',
      description: 'If true, the chip will be clickable',
    },
    onDelete: {
      control: 'boolean',
      description: 'If true, the chip will be deletable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

/**
 * Default Story
 * 
 * Shows a basic chip with default styling.
 */
export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

/**
 * Clickable Story
 * 
 * Demonstrates a chip with click interaction enabled.
 */
export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    clickable: true,
  },
};

/**
 * Deletable Story
 * 
 * Shows a chip with delete functionality and custom delete icon.
 */
export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    onDelete: () => {},
    deleteIcon: <DeleteIcon />,
  },
};

/**
 * WithAvatar Story
 * 
 * Demonstrates a chip with an avatar element.
 */
export const WithAvatar: Story = {
  args: {
    label: 'With Avatar',
    avatar: <div style={{ width: 24, height: 24, backgroundColor: '#ccc', borderRadius: '50%' }} />,
  },
};

/**
 * DifferentVariants Story
 * 
 * Shows chips with different variants: filled and outlined.
 */
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </div>
  ),
  parameters: {
    controls: { exclude: ['variant'] },
  },
};

/**
 * DifferentColors Story
 * 
 * Demonstrates chips with different theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
    </div>
  ),
  parameters: {
    controls: { exclude: ['color'] },
  },
};

/**
 * DifferentSizes Story
 * 
 * Shows chips in different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </div>
  ),
  parameters: {
    controls: { exclude: ['size'] },
  },
};

/**
 * Disabled Story
 * 
 * Demonstrates a disabled chip.
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
  },
};

/**
 * WithCustomStyle Story
 * 
 * Shows a chip with custom styling and hover effects.
 */
export const WithCustomStyle: Story = {
  args: {
    label: 'Custom Style',
    sx: {
      backgroundColor: '#f5f5f5',
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
    },
  },
}; 