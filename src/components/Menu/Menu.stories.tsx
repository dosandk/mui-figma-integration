import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@mui/material';
import {
  Menu,
  MenuItem,
  MenuList,
  MenuDivider,
} from './index';
import {
  ContentCopy as ContentCopyIcon,
  ContentCut as ContentCutIcon,
  ContentPaste as ContentPasteIcon,
} from '@mui/icons-material';

/**
 * Menu Component Stories
 * 
 * This file contains all the stories for the Menu component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-menu/
 */
const meta: Meta<typeof Menu> = {
  title: 'Molecules/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    anchorEl: {
      control: false,
      description: 'The element that shows the menu',
    },
    open: {
      control: 'boolean',
      description: 'If true, the menu is shown',
    },
    onClose: {
      control: false,
      description: 'Callback fired when the menu is closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

/**
 * MenuDemo Component
 * 
 * A wrapper component that demonstrates the basic menu functionality with icons.
 */
const MenuDemo = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <ContentCopyIcon sx={{ mr: 1 }} />
          Copy
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ContentCutIcon sx={{ mr: 1 }} />
          Cut
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ContentPasteIcon sx={{ mr: 1 }} />
          Paste
        </MenuItem>
      </Menu>
    </div>
  );
};

/**
 * Default Story
 * 
 * Shows a basic menu with icons and default styling.
 */
export const Default: Story = {
  render: () => <MenuDemo />,
};

/**
 * WithDivider Story
 * 
 * Demonstrates a menu with a divider between menu items.
 */
export const WithDivider: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          aria-controls={open ? 'menu-with-divider' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="menu-with-divider"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuDivider />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  },
};

/**
 * WithCustomStyle Story
 * 
 * Shows a menu with custom styling for hover effects and dimensions.
 */
export const WithCustomStyle: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          aria-controls={open ? 'styled-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="styled-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          PaperProps={{
            sx: {
              maxHeight: 300,
              width: '20ch',
              '& .MuiMenuItem-root': {
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                },
              },
            },
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuDivider />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  },
}; 