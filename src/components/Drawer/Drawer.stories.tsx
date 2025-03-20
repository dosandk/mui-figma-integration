import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './index';
import { Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, Person, Settings } from '@mui/icons-material';
import { useState } from 'react';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Drawer");

/**
 * Drawer Component Stories
 * 
 * This file contains all the stories for the Drawer component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-drawer/
 */
const meta: Meta<typeof Drawer> = {
  title: 'Atoms/Drawer',
  component: Drawer,
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
      description: 'If true, the drawer is open',
    },
    anchor: {
      control: 'select',
      options: ['left', 'top', 'right', 'bottom'],
      description: 'The anchor of the drawer',
    },
    variant: {
      control: 'select',
      options: ['permanent', 'persistent', 'temporary'],
      description: 'The variant to use',
    },
    elevation: {
      control: 'number',
      description: 'The elevation of the drawer',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/**
 * DrawerDemo Component
 * 
 * A wrapper component that demonstrates the Drawer functionality with a list of menu items.
 */
const DrawerDemo = ({ args }: { args: any }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Home', icon: <Home /> },
    { text: 'Profile', icon: <Person /> },
    { text: 'Settings', icon: <Settings /> },
  ];

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Drawer
      </Button>
      <Drawer
        open={open}
        onClose={handleClose}
        {...args}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} component="button">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

/**
 * Default Story
 * 
 * Shows a basic temporary drawer that can be opened and closed.
 */
export const Default: Story = {
  render: (args) => <DrawerDemo args={args} />,
};

/**
 * Permanent Story
 * 
 * Demonstrates a permanent drawer that is always visible.
 */
export const Permanent: Story = {
  render: (args) => <DrawerDemo args={args} />,
  args: {
    variant: 'permanent',
    open: true,
  },
};

/**
 * Persistent Story
 * 
 * Shows a persistent drawer that stays open until explicitly closed.
 */
export const Persistent: Story = {
  render: (args) => <DrawerDemo args={args} />,
  args: {
    variant: 'persistent',
    open: true,
  },
};

/**
 * RightAnchored Story
 * 
 * Demonstrates a drawer anchored to the right side of the screen.
 */
export const RightAnchored: Story = {
  render: (args) => <DrawerDemo args={args} />,
  args: {
    anchor: 'right',
  },
};

/**
 * WithCustomStyle Story
 * 
 * Shows a drawer with custom styling for the paper and list items.
 */
export const WithCustomStyle: Story = {
  render: (args) => <DrawerDemo args={args} />,
  args: {
    sx: {
      '& .MuiDrawer-paper': {
        backgroundColor: 'primary.light',
        color: 'white',
      },
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
    },
  },
}; 