import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './index';
import { Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const meta: Meta<typeof AppBar> = {
  title: 'Molecules/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the AppBar',
    },
    position: {
      control: 'select',
      options: ['fixed', 'absolute', 'relative', 'static', 'sticky'],
      description: 'The positioning type',
    },
    elevation: {
      control: 'number',
      description: 'The elevation of the AppBar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    children: (
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    ),
  },
};

export const WithDifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Primary AppBar</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Secondary AppBar</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="error">
        <Toolbar>
          <Typography variant="h6">Error AppBar</Typography>
        </Toolbar>
      </AppBar>
    </div>
  ),
  parameters: {
    controls: { exclude: ['color'] },
  },
};

export const WithElevation: Story = {
  args: {
    elevation: 4,
    children: (
      <Toolbar>
        <Typography variant="h6">Elevated AppBar</Typography>
      </Toolbar>
    ),
  },
};

export const WithoutElevation: Story = {
  args: {
    elevation: 0,
    children: (
      <Toolbar>
        <Typography variant="h6">Flat AppBar</Typography>
      </Toolbar>
    ),
  },
}; 