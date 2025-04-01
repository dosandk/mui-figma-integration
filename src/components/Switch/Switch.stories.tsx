import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';
import { useState } from 'react';
import { FormControlLabel } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Switch");

/**
 * Switch Component Stories
 * 
 * This file contains all the stories for the Switch component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-switch/
 */
const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
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

/**
 * SwitchWithState Component
 * 
 * A wrapper component that demonstrates controlled switch functionality.
 */
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

/**
 * Default Story
 * 
 * Shows basic switch with default styling and functionality.
 */
export const Default: Story = {
  render: (props) => <SwitchWithState {...props} />,
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates switches in different sizes (small and medium).
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SwitchWithState size="small" />
      <SwitchWithState size="medium" />
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Shows switches with various theme colors.
 */
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

/**
 * Disabled Story
 * 
 * Demonstrates switches in disabled state, both checked and unchecked.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SwitchWithState disabled />
      <SwitchWithState disabled checked />
    </div>
  ),
};

/**
 * Required Story
 * 
 * Shows a required switch with validation.
 */
export const Required: Story = {
  render: () => (
    <SwitchWithState required />
  ),
};

/**
 * WithEdge Story
 * 
 * Demonstrates switches with different edge alignments.
 */
export const WithEdge: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SwitchWithState edge="start" />
      <SwitchWithState edge="end" />
      <SwitchWithState edge={false} />
    </div>
  ),
};

/**
 * WithCustomStyling Story
 * 
 * Shows switch with custom styling for thumb and track.
 */
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

/**
 * WithCustomInputProps Story
 * 
 * Demonstrates switch with custom input properties for accessibility and testing.
 */
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
