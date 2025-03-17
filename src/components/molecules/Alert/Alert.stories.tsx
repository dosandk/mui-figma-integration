import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

const AlertWithClose = ({ ...rest }: any) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)}>
        Show Alert
      </Button>
    );
  }

  return (
    <Alert
      onClose={handleClose}
      {...rest}
    />
  );
};

export const Default: Story = {
  render: () => (
    <Alert severity="info">
      This is an info alert.
    </Alert>
  ),
};

export const DifferentSeverities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert severity="error">This is an error alert.</Alert>
      <Alert severity="warning">This is a warning alert.</Alert>
      <Alert severity="info">This is an info alert.</Alert>
      <Alert severity="success">This is a success alert.</Alert>
    </div>
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert severity="info" variant="filled">This is a filled alert.</Alert>
      <Alert severity="info" variant="outlined">This is an outlined alert.</Alert>
      <Alert severity="info" variant="standard">This is a standard alert.</Alert>
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <AlertWithClose severity="info">
      This alert can be closed.
    </AlertWithClose>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <Alert severity="info" icon={<CloseIcon />}>
      This alert has a custom icon.
    </Alert>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Alert
      severity="info"
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      This alert has an action button.
    </Alert>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Alert
      severity="info"
      sx={{
        '& .MuiAlert-icon': {
          color: 'primary.main',
        },
        '& .MuiAlert-message': {
          color: 'text.primary',
        },
        '& .MuiAlert-action': {
          color: 'primary.main',
        },
      }}
    >
      This alert has custom styling.
    </Alert>
  ),
}; 