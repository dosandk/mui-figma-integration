import type { Meta, StoryObj } from '@storybook/react';
import { SpeedDial } from './index';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Share as ShareIcon,
  Print as PrintIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import { useState } from 'react';

/**
 * SpeedDial Component Stories
 * 
 * This file contains all the stories for the SpeedDial component, showcasing different configurations and animations.
 * 
 * https://mui.com/material-ui/react-speed-dial/
 */
const meta: Meta<typeof SpeedDial> = {
  title: 'Molecules/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right'],
    },
    hidden: {
      control: 'boolean',
    },
    transitionDuration: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpeedDial>;

const defaultActions = [
  { icon: <AddIcon />, name: 'Add', onClick: () => console.log('Add clicked') },
  { icon: <EditIcon />, name: 'Edit', onClick: () => console.log('Edit clicked') },
  { icon: <DeleteIcon />, name: 'Delete', onClick: () => console.log('Delete clicked') },
];

const SpeedDialWithState = ({ direction, hidden, transitionDuration }: any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SpeedDial
      open={open}
      icon={<AddIcon />}
      actions={defaultActions}
      onOpen={handleOpen}
      onClose={handleClose}
      direction={direction}
      ariaLabel="SpeedDial example"
      hidden={hidden}
      transitionDuration={transitionDuration}
    />
  );
};

/**
 * Default Story
 * 
 * Shows a basic speed dial component with default settings and three actions.
 */
export const Default: Story = {
  render: () => <SpeedDialWithState />,
};

/**
 * DifferentDirections Story
 * 
 * Demonstrates speed dial components with different opening directions: up, down, left, and right.
 */
export const DifferentDirections: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <SpeedDialWithState direction="up" />
      <SpeedDialWithState direction="down" />
      <SpeedDialWithState direction="left" />
      <SpeedDialWithState direction="right" />
    </div>
  ),
};

/**
 * WithMoreActions Story
 * 
 * Shows a speed dial component with additional actions for more complex use cases.
 */
export const WithMoreActions: Story = {
  render: () => (
    <SpeedDialWithState
      actions={[
        ...defaultActions,
        { icon: <ShareIcon />, name: 'Share', onClick: () => console.log('Share clicked') },
        { icon: <PrintIcon />, name: 'Print', onClick: () => console.log('Print clicked') },
        { icon: <SaveIcon />, name: 'Save', onClick: () => console.log('Save clicked') },
      ]}
    />
  ),
};

/**
 * Hidden Story
 * 
 * Demonstrates a speed dial component that is initially hidden.
 */
export const Hidden: Story = {
  render: () => <SpeedDialWithState hidden={true} />,
};

/**
 * CustomTransitionDuration Story
 * 
 * Shows a speed dial component with a custom animation duration.
 */
export const CustomTransitionDuration: Story = {
  render: () => <SpeedDialWithState transitionDuration={500} />,
};

/**
 * CustomStyle Story
 * 
 * Demonstrates a speed dial component with custom styling for the main button.
 */
export const CustomStyle: Story = {
  render: () => (
    <SpeedDialWithState
      sx={{
        '& .MuiSpeedDial-fab': {
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        },
      }}
    />
  ),
}; 