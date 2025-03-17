import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';
import { FormControlLabel } from '@mui/material';

/**
 * Checkbox Component Stories
 * 
 * This file contains all the stories for the Checkbox component, showcasing different states, colors, sizes, and interactive features.
 * 
 * https://mui.com/material-ui/react-checkbox/
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Molecules/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
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
    indeterminate: {
      control: 'boolean',
      description: 'If true, the component appears indeterminate',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the component is checked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * Default Story
 * 
 * Shows a basic checkbox with a label.
 */
export const Default: Story = {
  args: {
    label: 'Default Checkbox',
  },
  render: (args) => (
    <FormControlLabel
      control={<Checkbox {...args} />}
      label={args.label}
    />
  ),
};

/**
 * Checked Story
 * 
 * Demonstrates a checkbox in the checked state.
 */
export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked Checkbox',
  },
  render: (args) => (
    <FormControlLabel
      control={<Checkbox {...args} />}
      label={args.label}
    />
  ),
};

/**
 * Indeterminate Story
 * 
 * Shows a checkbox in the indeterminate state.
 */
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Indeterminate Checkbox',
  },
  render: (args) => (
    <FormControlLabel
      control={<Checkbox {...args} />}
      label={args.label}
    />
  ),
};

/**
 * Disabled Story
 * 
 * Demonstrates a disabled checkbox.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Checkbox',
  },
  render: (args) => (
    <FormControlLabel
      control={<Checkbox {...args} />}
      label={args.label}
    />
  ),
};

/**
 * DisabledChecked Story
 * 
 * Shows a disabled checkbox in the checked state.
 */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled Checked Checkbox',
  },
  render: (args) => (
    <FormControlLabel
      control={<Checkbox {...args} />}
      label={args.label}
    />
  ),
};

/**
 * DifferentColors Story
 * 
 * Demonstrates checkboxes with different theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Primary"
      />
      <FormControlLabel
        control={<Checkbox color="secondary" />}
        label="Secondary"
      />
      <FormControlLabel
        control={<Checkbox color="error" />}
        label="Error"
      />
      <FormControlLabel
        control={<Checkbox color="warning" />}
        label="Warning"
      />
      <FormControlLabel
        control={<Checkbox color="info" />}
        label="Info"
      />
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Success"
      />
    </div>
  ),
  parameters: {
    controls: { exclude: ['color'] },
  },
};

/**
 * DifferentSizes Story
 * 
 * Shows checkboxes in different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <FormControlLabel
        control={<Checkbox size="small" />}
        label="Small"
      />
      <FormControlLabel
        control={<Checkbox size="medium" />}
        label="Medium"
      />
    </div>
  ),
  parameters: {
    controls: { exclude: ['size'] },
  },
}; 