import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectItem } from './index';

/**
 * Select Component Stories
 * 
 * This file contains all the stories for the Select component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-select/
 */
const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text to display above the select',
    },
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
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant to use',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component will be disabled',
    },
    required: {
      control: 'boolean',
      description: 'If true, the label will be displayed with an asterisk',
    },
    error: {
      control: 'boolean',
      description: 'If true, the component will be displayed in an error state',
    },
    helperText: {
      control: 'text',
      description: 'The helper text to display below the select',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

/**
 * Default options for select components
 */
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

/**
 * Default Story
 * 
 * Shows basic select with default styling and options.
 */
export const Default: Story = {
  render: () => (
    <Select>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};

/**
 * WithLabel Story
 * 
 * Demonstrates select with a label above the input.
 */
export const WithLabel: Story = {
  render: () => (
    <Select label="Select an option">
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};

/**
 * DifferentVariants Story
 * 
 * Shows select components with different variants (outlined, filled, standard).
 */
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Select label="Outlined" variant="outlined">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Filled" variant="filled">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Standard" variant="standard">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates select components in different sizes (small and medium).
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Select label="Small" size="small">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Medium" size="medium">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Shows select components with various theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Select label="Primary" color="primary">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Secondary" color="secondary">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Success" color="success">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Error" color="error">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Info" color="info">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Warning" color="warning">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  ),
};

/**
 * WithHelperText Story
 * 
 * Demonstrates select with helper text below the input.
 */
export const WithHelperText: Story = {
  render: () => (
    <Select label="Select an option" helperText="Please select one option">
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};

/**
 * WithError Story
 * 
 * Shows select in error state with error message.
 */
export const WithError: Story = {
  render: () => (
    <Select
      label="Select an option"
      error
      helperText="This field is required"
    >
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};

/**
 * Required Story
 * 
 * Demonstrates required select with asterisk indicator.
 */
export const Required: Story = {
  render: () => (
    <Select label="Select an option" required>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
};

/**
 * Disabled Story
 * 
 * Shows select in disabled state.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Select label="Enabled">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <Select label="Disabled" disabled>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  ),
};

/**
 * CustomStyle Story
 * 
 * Demonstrates select with custom styling.
 */
export const CustomStyle: Story = {
  render: () => (
    <Select
      label="Custom Styled"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        },
      }}
    >
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  ),
}; 