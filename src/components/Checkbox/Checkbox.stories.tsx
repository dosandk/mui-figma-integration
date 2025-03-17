import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';
import { FormControlLabel } from '@mui/material';

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