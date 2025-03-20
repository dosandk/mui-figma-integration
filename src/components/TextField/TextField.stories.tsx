import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';
import { useState } from 'react';
import { Box } from '@mui/material';
import { Search, Visibility, VisibilityOff } from '@mui/icons-material';

import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("TextField");

/**
 * TextField Component Stories
 * 
 * This file contains all the stories for the TextField component, showcasing different variants, states, and styling options.
 * 
 * https://mui.com/material-ui/react-text-field/
 */
const meta: Meta<typeof TextField> = {
  title: "Molecules/TextField",
  component: TextField,
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
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

/**
 * TextFieldWithState Component
 * 
 * A wrapper component that demonstrates controlled input functionality.
 */
const TextFieldWithState = ({ ...rest }: any) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

/**
 * Default Story
 * 
 * Shows a basic text field with default styling.
 */
export const Default: Story = {
  render: () => <TextFieldWithState label="Default TextField" />,
};

/**
 * WithHelperText Story
 * 
 * Demonstrates a text field with helper text below.
 */
export const WithHelperText: Story = {
  render: () => (
    <TextFieldWithState
      label="With Helper Text"
      helperText="This is a helper text"
    />
  ),
};

/**
 * WithError Story
 * 
 * Shows a text field in error state with error message.
 */
export const WithError: Story = {
  render: () => (
    <TextFieldWithState
      label="With Error"
      error
      helperText="This field is required"
    />
  ),
};

/**
 * Required Story
 * 
 * Demonstrates a required text field with validation message.
 */
export const Required: Story = {
  render: () => (
    <TextFieldWithState
      label="Required Field"
      required
      helperText="This field is required"
    />
  ),
};

/**
 * Disabled Story
 * 
 * Shows a disabled text field with pre-filled value.
 */
export const Disabled: Story = {
  render: () => (
    <TextFieldWithState
      label="Disabled Field"
      disabled
      defaultValue="Disabled value"
    />
  ),
};

/**
 * WithPlaceholder Story
 * 
 * Demonstrates a text field with placeholder text.
 */
export const WithPlaceholder: Story = {
  render: () => (
    <TextFieldWithState
      label="With Placeholder"
      placeholder="Enter your text here"
    />
  ),
};

/**
 * DifferentVariants Story
 * 
 * Shows text fields with different variants: outlined, filled, and standard.
 */
export const DifferentVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextFieldWithState
        label="Outlined Variant"
        variant="outlined"
      />
      <TextFieldWithState
        label="Filled Variant"
        variant="filled"
      />
      <TextFieldWithState
        label="Standard Variant"
        variant="standard"
      />
    </Box>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Demonstrates text fields in different sizes.
 */
export const DifferentSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextFieldWithState
        label="Small Size"
        size="small"
      />
      <TextFieldWithState
        label="Medium Size"
        size="medium"
      />
    </Box>
  ),
};

/**
 * DifferentColors Story
 * 
 * Shows text fields with different theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextFieldWithState
        label="Primary Color"
        color="primary"
      />
      <TextFieldWithState
        label="Secondary Color"
        color="secondary"
      />
      <TextFieldWithState
        label="Error Color"
        color="error"
      />
      <TextFieldWithState
        label="Success Color"
        color="success"
      />
      <TextFieldWithState
        label="Warning Color"
        color="warning"
      />
      <TextFieldWithState
        label="Info Color"
        color="info"
      />
    </Box>
  ),
};

/**
 * WithIcons Story
 * 
 * Demonstrates text fields with start and end icons.
 */
export const WithIcons: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextFieldWithState
        label="With Start Icon"
        InputProps={{
          startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
        }}
      />
      <TextFieldWithState
        label="With End Icon"
        InputProps={{
          endAdornment: <Search sx={{ ml: 1, color: 'text.secondary' }} />,
        }}
      />
    </Box>
  ),
};

/**
 * PasswordField Story
 * 
 * Shows a password field with show/hide password functionality.
 */
export const PasswordField: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <Box
              component="span"
              onClick={handleClickShowPassword}
              sx={{ cursor: 'pointer', color: 'text.secondary' }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </Box>
          ),
        }}
      />
    );
  },
};

/**
 * WithCustomStyling Story
 * 
 * Demonstrates a text field with custom styling for hover effects and colors.
 */
export const WithCustomStyling: Story = {
  render: () => (
    <TextFieldWithState
      label="Custom Styled Field"
      sx={{
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        },
        '& .MuiInputLabel-root': {
          color: 'primary.main',
        },
      }}
      InputProps={{
        sx: {
          backgroundColor: 'grey.50',
        },
      }}
    />
  ),
}; 
