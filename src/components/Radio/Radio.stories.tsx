import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './index';

/**
 * Radio Component Stories
 * 
 * This file contains all the stories for the Radio component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-radio-button/
 */
const meta: Meta<typeof Radio> = {
  title: 'Molecules/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'default'],
      description: 'The color of the component',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component will be disabled',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component',
    },
    label: {
      control: 'text',
      description: 'The label text to display next to the radio button',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

/**
 * Default Story
 * 
 * Shows basic radio button with default styling.
 */
export const Default: Story = {
  render: () => <Radio />,
};

/**
 * WithLabel Story
 * 
 * Demonstrates radio button with a label.
 */
export const WithLabel: Story = {
  render: () => <Radio label="Radio Label" />,
};

/**
 * Disabled Story
 * 
 * Shows radio buttons in enabled and disabled states.
 */
export const Disabled: Story = {
  render: () => (
    <div>
      <Radio label="Enabled" />
      <Radio label="Disabled" disabled />
    </div>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates radio buttons in different sizes (small and medium).
 */
export const DifferentSizes: Story = {
  render: () => (
    <div>
      <Radio label="Small" size="small" />
      <Radio label="Medium" size="medium" />
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Shows radio buttons with various theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div>
      <Radio label="Primary" color="primary" />
      <Radio label="Secondary" color="secondary" />
      <Radio label="Success" color="success" />
      <Radio label="Error" color="error" />
      <Radio label="Info" color="info" />
      <Radio label="Warning" color="warning" />
      <Radio label="Default" color="default" />
    </div>
  ),
};

/**
 * CustomStyle Story
 * 
 * Demonstrates radio button with custom styling for icon and label.
 */
export const CustomStyle: Story = {
  render: () => (
    <Radio
      label="Custom Styled"
      sx={{
        '& .MuiSvgIcon-root': {
          fontSize: 30,
        },
        '& .MuiFormControlLabel-label': {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    />
  ),
}; 