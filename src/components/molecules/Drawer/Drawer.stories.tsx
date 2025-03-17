import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './index';
import { Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, Person, Settings } from '@mui/icons-material';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
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

export const Default: Story = {
  render: (args) => <DrawerDemo args={args} />,
};

export const Permanent: Story = {
  render: (args) => <DrawerDemo args={args} />,
  args: {
    variant: 'permanent',
    open: true,
  },
};

export const Persistent: Story = {
  render: (args) => <DrawerDemo args={args} />,
  args: {
    variant: 'persistent',
    open: true,
  },
};

export const RightAnchored: Story = {
  render: (args) => <DrawerDemo args={args} />,
  args: {
    anchor: 'right',
  },
};

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