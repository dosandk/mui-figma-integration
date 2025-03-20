import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './index';
import { getFigmaPath } from "../figma.config";
import { Home, Person, Settings } from '@mui/icons-material';

const FIGMA_COMPONENT_URL = getFigmaPath("IconButton");

/**
 * IconButton Component Stories
 * 
 * This file contains all the stories for the IconButton component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-icon-button/
 */
const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the icon button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon button',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the button will be disabled',
    },
    edge: {
      control: 'select',
      options: ['start', 'end', false],
      description: 'If given, uses a negative margin to counteract the padding on one side',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

/**
 * Default Story
 * 
 * Shows a basic icon button with default styling.
 */
export const Default: Story = {
  args: {
    children: <Home />,
  },
};

/**
 * DifferentColors Story
 * 
 * Shows icon buttons with various theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconButton color="primary">
        <Home />
      </IconButton>
      <IconButton color="secondary">
        <Person />
      </IconButton>
      <IconButton color="error">
        <Settings />
      </IconButton>
      <IconButton color="info">
        <Home />
      </IconButton>
      <IconButton color="success">
        <Person />
      </IconButton>
      <IconButton color="warning">
        <Settings />
      </IconButton>
    </div>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates icon buttons with different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton size="small">
        <Home />
      </IconButton>
      <IconButton size="medium">
        <Home />
      </IconButton>
      <IconButton size="large">
        <Home />
      </IconButton>
    </div>
  ),
};

/**
 * WithEdge Story
 * 
 * Shows icon buttons with different edge alignments.
 */
export const WithEdge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton edge="start">
        <Home />
      </IconButton>
      <IconButton edge="end">
        <Home />
      </IconButton>
      <IconButton edge={false}>
        <Home />
      </IconButton>
    </div>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows an icon button with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    children: <Home />,
    sx: {
      backgroundColor: 'primary.main',
      color: 'white',
      '&:hover': {
        backgroundColor: 'secondary.main',
      },
    },
  },
}; 