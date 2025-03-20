import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './index';
import { Button, DialogContentText } from '@mui/material';
import { useState } from 'react';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Dialog");

/**
 * Dialog Component Stories
 * 
 * This file contains all the stories for the Dialog component, showcasing different sizes, styles, and interactive features.
 * 
 * https://mui.com/material-ui/react-dialog/
 */
const meta: Meta<typeof Dialog> = {
  title: 'Organisms/Dialog',
  component: Dialog,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
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

/**
 * DialogDemo Component
 * 
 * A wrapper component that provides the open/close functionality for dialog stories.
 */
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

/**
 * Default Story
 * 
 * Shows a basic dialog with title, content, and action buttons.
 */
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

/**
 * WithCustomWidth Story
 * 
 * Demonstrates a dialog with custom width and full-width option.
 */
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

/**
 * FullScreen Story
 * 
 * Shows a dialog that takes up the full screen.
 */
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

/**
 * WithCustomStyle Story
 * 
 * Demonstrates a dialog with custom styling applied to its components.
 */
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