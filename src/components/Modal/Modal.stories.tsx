import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Modal } from './index';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the modal is shown',
    },
    onClose: {
      control: false,
      description: 'Callback fired when the modal is closed',
    },
    closeAfterTransition: {
      control: 'boolean',
      description: 'If true, the modal will close after the transition',
    },
    disableEscapeKeyDown: {
      control: 'boolean',
      description: 'If true, the modal will not close when pressing the escape key',
    },
    disablePortal: {
      control: 'boolean',
      description: 'If true, the modal will not be rendered in a portal',
    },
    hideBackdrop: {
      control: 'boolean',
      description: 'If true, the backdrop will not be rendered',
    },
    keepMounted: {
      control: 'boolean',
      description: 'If true, the modal will be kept mounted in the DOM',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This is a modal description. You can put any content here.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const WithoutBackdrop: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          hideBackdrop
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
              Modal Without Backdrop
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This modal has no backdrop.
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    );
  },
};

export const DisableEscapeKey: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          disableEscapeKeyDown
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
              Modal Without Escape Key
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This modal cannot be closed with the escape key.
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    );
  },
};

export const WithCustomStyle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <Box
            sx={{
              ...style,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '& .MuiTypography-root': {
                color: 'inherit',
              },
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Styled Modal
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This modal has custom styling.
            </Typography>
            <Button
              onClick={handleClose}
              sx={{ mt: 2, color: 'inherit', borderColor: 'inherit' }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      </div>
    );
  },
}; 