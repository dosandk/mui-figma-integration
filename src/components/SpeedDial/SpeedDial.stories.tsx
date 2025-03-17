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

export const Default: Story = {
  render: () => <SpeedDialWithState />,
};

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

export const Hidden: Story = {
  render: () => <SpeedDialWithState hidden={true} />,
};

export const CustomTransitionDuration: Story = {
  render: () => <SpeedDialWithState transitionDuration={500} />,
};

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