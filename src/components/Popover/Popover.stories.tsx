import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import { Popover } from './index';

/**
 * Popover Component Stories
 * 
 * This file contains all the stories for the Popover component, showcasing different anchor positions, content styles, and interactive features.
 * 
 * https://mui.com/material-ui/react-popover/
 */
const meta: Meta<typeof Popover> = {
  title: 'Molecules/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the popover is shown',
    },
    anchorOrigin: {
      control: 'object',
      description: 'This is the point on the anchor where the popover\'s anchorEl will attach to',
    },
    transformOrigin: {
      control: 'object',
      description: 'This is the point on the popover which will attach to the anchor\'s origin',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

/**
 * PopoverDemo Component
 * 
 * A wrapper component that provides the open/close functionality for popover stories.
 */
const PopoverDemo = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Popover</Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Box sx={{ p: 2 }}>
          <Typography>This is a basic popover.</Typography>
        </Box>
      </Popover>
    </div>
  );
};

/**
 * Default Story
 * 
 * Shows a basic popover with default positioning and content.
 */
export const Default: Story = {
  render: () => <PopoverDemo />,
};

/**
 * DifferentAnchors Story
 * 
 * Demonstrates popovers with different anchor positions and transformations.
 */
export const DifferentAnchors: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [position, setPosition] = useState<{
      anchor: { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
      transform: { vertical: 'top' | 'center' | 'bottom'; horizontal: 'left' | 'center' | 'right' };
    }>({
      anchor: { vertical: 'bottom', horizontal: 'left' },
      transform: { vertical: 'top', horizontal: 'left' },
    });

    const handleClick = (
      event: React.MouseEvent<HTMLElement>,
      anchor: typeof position.anchor,
      transform: typeof position.transform
    ) => {
      setAnchorEl(event.currentTarget);
      setPosition({ anchor, transform });
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          onClick={(e) =>
            handleClick(
              e,
              { vertical: 'bottom', horizontal: 'left' },
              { vertical: 'top', horizontal: 'left' }
            )
          }
        >
          Bottom Left
        </Button>
        <Button
          onClick={(e) =>
            handleClick(
              e,
              { vertical: 'bottom', horizontal: 'center' },
              { vertical: 'top', horizontal: 'center' }
            )
          }
        >
          Bottom Center
        </Button>
        <Button
          onClick={(e) =>
            handleClick(
              e,
              { vertical: 'bottom', horizontal: 'right' },
              { vertical: 'top', horizontal: 'right' }
            )
          }
        >
          Bottom Right
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={position.anchor}
          transformOrigin={position.transform}
        >
          <Box sx={{ p: 2 }}>
            <Typography>
              Anchor: {position.anchor.vertical} {position.anchor.horizontal}
            </Typography>
          </Box>
        </Popover>
      </Box>
    );
  },
};

/**
 * WithPaper Story
 * 
 * Shows a popover with Paper component for enhanced styling and elevation.
 */
export const WithPaper: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button onClick={handleClick}>Open Popover</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <Paper sx={{ p: 2, maxWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              Popover Title
            </Typography>
            <Typography>
              This popover uses a Paper component for enhanced styling and elevation.
              It can contain any content you want to display.
            </Typography>
          </Paper>
        </Popover>
      </div>
    );
  },
};

/**
 * WithCustomStyle Story
 * 
 * Demonstrates a popover with custom styling applied to its components.
 */
export const WithCustomStyle: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button onClick={handleClick}>Open Popover</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={{
            '& .MuiPaper-root': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              borderRadius: 2,
              boxShadow: 8,
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Styled Popover
            </Typography>
            <Typography>
              This popover has custom styling applied to it.
            </Typography>
          </Box>
        </Popover>
      </div>
    );
  },
}; 