import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';
import { useState } from 'react';
import { Box } from '@mui/material';
import { Search, Visibility, VisibilityOff } from '@mui/icons-material';

const meta: Meta<typeof TextField> = {
  title: 'Molecules/TextField',
  component: TextField,
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

export const Default: Story = {
  render: () => <TextFieldWithState label="Default TextField" />,
};

export const WithHelperText: Story = {
  render: () => (
    <TextFieldWithState
      label="With Helper Text"
      helperText="This is a helper text"
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <TextFieldWithState
      label="With Error"
      error
      helperText="This field is required"
    />
  ),
};

export const Required: Story = {
  render: () => (
    <TextFieldWithState
      label="Required Field"
      required
      helperText="This field is required"
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextFieldWithState
      label="Disabled Field"
      disabled
      defaultValue="Disabled value"
    />
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <TextFieldWithState
      label="With Placeholder"
      placeholder="Enter your text here"
    />
  ),
};

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