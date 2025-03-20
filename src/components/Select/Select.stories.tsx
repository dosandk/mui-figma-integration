import type { Meta, StoryObj } from '@storybook/react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Select");

/**
 * Select Component Stories
 * 
 * This file contains all the stories for the Select component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-select/
 */
const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant to use',
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
    error: {
      control: 'boolean',
      description: 'If true, the label will be displayed in an error state',
    },
    multiple: {
      control: 'boolean',
      description: 'If true, the component will be a multiple select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/**
 * Default Story
 * 
 * Shows a basic select component with default settings.
 */
export const Default: Story = {
  render: () => (
    <FormControl fullWidth>
      <InputLabel>Age</InputLabel>
      <Select label="Age" defaultValue={10}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  ),
};

/**
 * DifferentVariants Story
 * 
 * Shows select components with different variants.
 */
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', width: '300px' }}>
      <FormControl>
        <InputLabel>Outlined</InputLabel>
        <Select label="Outlined" defaultValue={10} variant="outlined">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Filled</InputLabel>
        <Select label="Filled" defaultValue={10} variant="filled">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Standard</InputLabel>
        <Select label="Standard" defaultValue={10} variant="standard">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates select components with different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', width: '300px' }}>
      <FormControl size="small">
        <InputLabel>Small</InputLabel>
        <Select label="Small" defaultValue={10} size="small">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="medium">
        <InputLabel>Medium</InputLabel>
        <Select label="Medium" defaultValue={10} size="medium">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  ),
};

/**
 * Multiple Story
 * 
 * Shows a multiple select component.
 */
export const Multiple: Story = {
  render: () => (
    <FormControl fullWidth>
      <InputLabel>Multiple</InputLabel>
      <Select
        multiple
        label="Multiple"
        defaultValue={[10, 20]}
        sx={{ minHeight: '100px' }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={40}>Forty</MenuItem>
        <MenuItem value={50}>Fifty</MenuItem>
      </Select>
    </FormControl>
  ),
};

/**
 * Disabled Story
 * 
 * Shows a disabled select component.
 */
export const Disabled: Story = {
  render: () => (
    <FormControl fullWidth>
      <InputLabel>Disabled</InputLabel>
      <Select label="Disabled" defaultValue={10} disabled>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  ),
};

/**
 * WithError Story
 * 
 * Demonstrates a select component with error state.
 */
export const WithError: Story = {
  render: () => (
    <FormControl fullWidth error>
      <InputLabel>Error</InputLabel>
      <Select label="Error" defaultValue={10}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows a select component with custom styling.
 */
export const WithCustomStyle: Story = {
  render: () => (
    <FormControl fullWidth>
      <InputLabel>Custom Style</InputLabel>
      <Select
        label="Custom Style"
        defaultValue={10}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'secondary.main',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'error.main',
          },
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  ),
}; 