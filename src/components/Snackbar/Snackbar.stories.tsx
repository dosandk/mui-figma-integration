import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './index';
import { Button } from '@mui/material';
import { useState } from 'react';

/**
 * Snackbar Component Stories
 * 
 * This file contains all the stories for the Snackbar component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-snackbar/
 */
const meta: Meta<typeof Snackbar> = {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    message: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    autoHideDuration: {
      control: 'number',
    },
    anchorOrigin: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

/**
 * SnackbarWithButton Component
 * 
 * A wrapper component that demonstrates controlled snackbar functionality with a trigger button.
 */
const SnackbarWithButton = ({ message, color, severity, autoHideDuration, anchorOrigin }: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Open Snackbar
      </Button>
      <Snackbar
        open={open}
        message={message}
        color={color}
        severity={severity}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
      />
    </>
  );
};

/**
 * Default Story
 * 
 * Shows basic snackbar with default styling and message.
 */
export const Default: Story = {
  render: () => <SnackbarWithButton message="This is a default snackbar message" />,
};

/**
 * Success Story
 * 
 * Demonstrates snackbar with success styling and message.
 */
export const Success: Story = {
  render: () => (
    <SnackbarWithButton
      message="Operation completed successfully!"
      color="success"
      severity="success"
    />
  ),
};

/**
 * Error Story
 * 
 * Shows snackbar with error styling and message.
 */
export const Error: Story = {
  render: () => (
    <SnackbarWithButton
      message="An error occurred. Please try again."
      color="error"
      severity="error"
    />
  ),
};

/**
 * Warning Story
 * 
 * Demonstrates snackbar with warning styling and message.
 */
export const Warning: Story = {
  render: () => (
    <SnackbarWithButton
      message="Please review your changes before proceeding."
      color="warning"
      severity="warning"
    />
  ),
};

/**
 * Info Story
 * 
 * Shows snackbar with info styling and message.
 */
export const Info: Story = {
  render: () => (
    <SnackbarWithButton
      message="New updates are available."
      color="info"
      severity="info"
    />
  ),
};

/**
 * CustomDuration Story
 * 
 * Demonstrates snackbar with custom auto-hide duration.
 */
export const CustomDuration: Story = {
  render: () => (
    <SnackbarWithButton
      message="This snackbar will stay longer"
      autoHideDuration={10000}
    />
  ),
};

/**
 * TopRight Story
 * 
 * Shows snackbar positioned in the top-right corner.
 */
export const TopRight: Story = {
  render: () => (
    <SnackbarWithButton
      message="Snackbar in top-right corner"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    />
  ),
};

/**
 * BottomLeft Story
 * 
 * Demonstrates snackbar positioned in the bottom-left corner.
 */
export const BottomLeft: Story = {
  render: () => (
    <SnackbarWithButton
      message="Snackbar in bottom-left corner"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    />
  ),
};

/**
 * WithCustomAlertProps Story
 * 
 * Shows snackbar with custom alert styling properties.
 */
export const WithCustomAlertProps: Story = {
  render: () => (
    <SnackbarWithButton
      message="Snackbar with custom alert props"
      AlertProps={{
        elevation: 6,
        variant: 'filled',
      }}
    />
  ),
}; 
