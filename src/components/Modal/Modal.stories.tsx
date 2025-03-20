import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './index';
import { getFigmaPath } from "../figma.config";
import { Box, Typography, Button } from '@mui/material';

const FIGMA_COMPONENT_URL = getFigmaPath("Modal");

/**
 * Modal Component Stories
 * 
 * This file contains all the stories for the Modal component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-modal/
 */
const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
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
      description: 'If true, the modal is open',
    },
    disablePortal: {
      control: 'boolean',
      description: 'Disable the portal behavior',
    },
    disableScrollLock: {
      control: 'boolean',
      description: 'Disable the scroll lock behavior',
    },
    hideBackdrop: {
      control: 'boolean',
      description: 'Do not render the backdrop',
    },
    keepMounted: {
      control: 'boolean',
      description: 'Always keep the children in the DOM',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

/**
 * Default Story
 * 
 * Shows a basic modal with default settings.
 */
export const Default: Story = {
  args: {
    open: true,
    children: (
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Basic Modal
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This is a basic modal with default settings.
        </Typography>
        <Button sx={{ mt: 2 }}>Close</Button>
      </Box>
    ),
  },
};

/**
 * WithCustomBackdrop Story
 * 
 * Demonstrates a modal with a custom backdrop color.
 */
export const WithCustomBackdrop: Story = {
  args: {
    open: true,
    children: (
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Custom Backdrop Modal
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This modal has a custom backdrop color.
        </Typography>
        <Button sx={{ mt: 2 }}>Close</Button>
      </Box>
    ),
    sx: {
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
      },
    },
  },
};

/**
 * DisablePortal Story
 * 
 * Shows a modal without portal behavior.
 */
export const DisablePortal: Story = {
  args: {
    open: true,
    disablePortal: true,
    children: (
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Non-Portal Modal
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This modal is rendered without using a portal.
        </Typography>
        <Button sx={{ mt: 2 }}>Close</Button>
      </Box>
    ),
  },
};

/**
 * WithCustomStyle Story
 * 
 * Demonstrates a modal with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    open: true,
    children: (
      <Box
        sx={{
          ...style,
          borderRadius: 2,
          border: 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          '& .MuiTypography-root': {
            color: 'primary.main',
          },
        }}
      >
        <Typography variant="h6" component="h2">
          Styled Modal
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This modal has custom styling applied.
        </Typography>
        <Button sx={{ mt: 2 }}>Close</Button>
      </Box>
    ),
  },
}; 