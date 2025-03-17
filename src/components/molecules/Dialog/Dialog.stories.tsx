import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './index';
import { Button, DialogContentText } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Molecules/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the dialog is open',
    },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Determine the max-width of the dialog',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the dialog takes up the full width of the screen',
    },
    fullScreen: {
      control: 'boolean',
      description: 'If true, the dialog takes up the full screen',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogDemo = ({ args }: { args: any }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        {...args}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DialogDemo args={args} />,
  args: {
    title: 'Dialog Title',
    content: (
      <DialogContentText>
        This is a dialog content. You can put any content here.
      </DialogContentText>
    ),
    actions: (
      <>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}} variant="contained">
          Confirm
        </Button>
      </>
    ),
  },
};

export const WithCustomWidth: Story = {
  render: (args) => <DialogDemo args={args} />,
  args: {
    maxWidth: 'sm',
    fullWidth: true,
    title: 'Custom Width Dialog',
    content: (
      <DialogContentText>
        This dialog has a custom width and is full width.
      </DialogContentText>
    ),
    actions: (
      <>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}} variant="contained">
          Confirm
        </Button>
      </>
    ),
  },
};

export const FullScreen: Story = {
  render: (args) => <DialogDemo args={args} />,
  args: {
    fullScreen: true,
    title: 'Full Screen Dialog',
    content: (
      <DialogContentText>
        This dialog takes up the full screen.
      </DialogContentText>
    ),
    actions: (
      <>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}} variant="contained">
          Confirm
        </Button>
      </>
    ),
  },
};

export const WithCustomStyle: Story = {
  render: (args) => <DialogDemo args={args} />,
  args: {
    title: 'Styled Dialog',
    content: (
      <DialogContentText>
        This dialog has custom styling.
      </DialogContentText>
    ),
    actions: (
      <>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}} variant="contained">
          Confirm
        </Button>
      </>
    ),
    sx: {
      '& .MuiDialog-paper': {
        backgroundColor: 'primary.light',
        color: 'white',
      },
      '& .MuiDialogTitle-root': {
        borderBottom: '1px solid white',
      },
      '& .MuiDialogActions-root': {
        borderTop: '1px solid white',
      },
    },
  },
}; 