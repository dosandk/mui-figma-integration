import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Alert");

/**
 * Alert Component Stories
 * 
 * This file contains all the stories for the Alert component, showcasing different variants, severities, and interactive features.
 * 
 * https://mui.com/material-ui/react-alert/
 */
const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
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
      options: ['error', 'warning', 'info', 'success'],
    },
    severity: {
      description: 'The severity of the alert.',
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    variant: {
      description: 'The variant to use for the alert.',
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
    onClose: {
      description: 'Callback fired when the close button is clicked.',
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * AlertWithClose Component
 * 
 * A wrapper component that adds close functionality to the Alert component.
 */
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

/**
 * Default Story
 * 
 * Shows a basic info alert with default styling.
 */
export const Default: Story = {
  render: () => (
    <Alert severity="info">
      This is an info alert.
    </Alert>
  ),
};

/**
 * DifferentSeverities Story
 * 
 * Demonstrates all available alert severities: error, warning, info, and success.
 */
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

/**
 * DifferentVariants Story
 * 
 * Shows the three available alert variants: filled, outlined, and standard.
 */
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert severity="info" variant="filled">This is a filled alert.</Alert>
      <Alert severity="info" variant="outlined">This is an outlined alert.</Alert>
      <Alert severity="info" variant="standard">This is a standard alert.</Alert>
    </div>
  ),
};

/**
 * WithCloseButton Story
 * 
 * Demonstrates an alert with a close button functionality.
 */
export const WithCloseButton: Story = {
  render: () => (
    <AlertWithClose severity="info">
      This alert can be closed.
    </AlertWithClose>
  ),
};

/**
 * WithCustomIcon Story
 * 
 * Shows an alert with a custom icon instead of the default severity icon.
 */
export const WithCustomIcon: Story = {
  render: () => (
    <Alert severity="info" icon={<CloseIcon />}>
      This alert has a custom icon.
    </Alert>
  ),
};

/**
 * WithAction Story
 * 
 * Displays an alert with an action button.
 */
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

/**
 * WithCustomStyling Story
 * 
 * Shows an alert with custom styling applied to its components.
 */
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
