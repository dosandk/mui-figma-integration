import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './index';
import { Button } from '@mui/material';
import { useState } from 'react';

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

export const Default: Story = {
  render: () => <SnackbarWithButton message="This is a default snackbar message" />,
};

export const Success: Story = {
  render: () => (
    <SnackbarWithButton
      message="Operation completed successfully!"
      color="success"
      severity="success"
    />
  ),
};

export const Error: Story = {
  render: () => (
    <SnackbarWithButton
      message="An error occurred. Please try again."
      color="error"
      severity="error"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <SnackbarWithButton
      message="Please review your changes before proceeding."
      color="warning"
      severity="warning"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <SnackbarWithButton
      message="New updates are available."
      color="info"
      severity="info"
    />
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <SnackbarWithButton
      message="This snackbar will stay longer"
      autoHideDuration={10000}
    />
  ),
};

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