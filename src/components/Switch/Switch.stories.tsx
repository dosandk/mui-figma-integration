import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';
import { useState } from 'react';
import { FormControlLabel } from '@mui/material';

const meta: Meta<typeof Switch> = {
  title: 'Molecules/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const SwitchWithState = ({ ...rest }: any) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          {...rest}
        />
      }
      label="Switch"
    />
  );
};

export const Default: Story = {
  render: () => <SwitchWithState />,
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SwitchWithState size="small" />
      <SwitchWithState size="medium" />
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SwitchWithState color="primary" />
      <SwitchWithState color="secondary" />
      <SwitchWithState color="error" />
      <SwitchWithState color="success" />
      <SwitchWithState color="warning" />
      <SwitchWithState color="info" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SwitchWithState disabled />
      <SwitchWithState disabled checked />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <SwitchWithState required />
  ),
};

export const WithEdge: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SwitchWithState edge="start" />
      <SwitchWithState edge="end" />
      <SwitchWithState edge={false} />
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <SwitchWithState
      sx={{
        '& .MuiSwitch-thumb': {
          backgroundColor: 'primary.main',
        },
        '& .MuiSwitch-track': {
          backgroundColor: 'grey.300',
        },
        '&.Mui-checked': {
          '& .MuiSwitch-thumb': {
            backgroundColor: 'success.main',
          },
          '& .MuiSwitch-track': {
            backgroundColor: 'success.light',
          },
        },
      }}
    />
  ),
};

export const WithCustomInputProps: Story = {
  render: () => (
    <SwitchWithState
      inputProps={{
        'aria-label': 'Custom switch',
        'data-testid': 'custom-switch',
      }}
    />
  ),
}; 