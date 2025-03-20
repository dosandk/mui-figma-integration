import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Radio");

/**
 * Radio Component Stories
 * 
 * This file contains all the stories for the Radio component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-radio/
 */
const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
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
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

/**
 * Default Story
 * 
 * Shows a basic radio button with default settings.
 */
export const Default: Story = {
  args: {
    checked: true,
  },
};

/**
 * DifferentColors Story
 * 
 * Shows radio buttons with different colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Radio checked color="default" />
      <Radio checked color="primary" />
      <Radio checked color="secondary" />
      <Radio checked color="error" />
      <Radio checked color="info" />
      <Radio checked color="success" />
      <Radio checked color="warning" />
    </div>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates radio buttons with different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Radio checked size="small" />
      <Radio checked size="medium" />
    </div>
  ),
};

/**
 * WithLabels Story
 * 
 * Shows radio buttons with labels using RadioGroup.
 */
export const WithLabels: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup defaultValue="female">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};

/**
 * Disabled Story
 * 
 * Shows radio buttons in disabled state.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Radio checked disabled />
      <Radio disabled />
    </div>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows a radio button with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    checked: true,
    sx: {
      '& .MuiSvgIcon-root': {
        fontSize: 48,
        color: 'primary.main',
        '&.Mui-checked': {
          color: 'secondary.main',
        },
      },
    },
  },
}; 