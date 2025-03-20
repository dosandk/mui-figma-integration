import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './index';
import { getFigmaPath } from "../figma.config";
import { Home, Person, Settings } from '@mui/icons-material';

const FIGMA_COMPONENT_URL = getFigmaPath("Icon");

/**
 * Icon Component Stories
 * 
 * This file contains all the stories for the Icon component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-icon/
 */
const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
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
      options: ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the icon',
    },
    fontSize: {
      control: 'select',
      options: ['inherit', 'small', 'medium', 'large'],
      description: 'The size of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

/**
 * Default Story
 * 
 * Shows a basic icon with default styling.
 */
export const Default: Story = {
  args: {
    children: <Home />,
  },
};

/**
 * DifferentColors Story
 * 
 * Shows icons with various theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icon color="primary">
        <Home />
      </Icon>
      <Icon color="secondary">
        <Person />
      </Icon>
      <Icon color="error">
        <Settings />
      </Icon>
      <Icon color="info">
        <Home />
      </Icon>
      <Icon color="success">
        <Person />
      </Icon>
      <Icon color="warning">
        <Settings />
      </Icon>
    </div>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates icons with different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon fontSize="small">
        <Home />
      </Icon>
      <Icon fontSize="medium">
        <Home />
      </Icon>
      <Icon fontSize="large">
        <Home />
      </Icon>
    </div>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows an icon with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    children: <Home />,
    sx: {
      color: 'primary.main',
      '&:hover': {
        color: 'secondary.main',
      },
    },
  },
}; 