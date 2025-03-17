import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './index';
import { BottomNavigationAction } from '@mui/material';
import { Restore as RestoreIcon, Favorite as FavoriteIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Molecules/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the BottomNavigation',
    },
    showLabels: {
      control: 'boolean',
      description: 'If true, all the labels will be shown',
    },
    sx: {
      control: 'object',
      description: 'The system prop that allows defining system overrides as well as additional CSS styles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {
    children: (
      <>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </>
    ),
  },
};

export const WithoutLabels: Story = {
  args: {
    showLabels: false,
    children: (
      <>
        <BottomNavigationAction icon={<RestoreIcon />} />
        <BottomNavigationAction icon={<FavoriteIcon />} />
        <BottomNavigationAction icon={<LocationOnIcon />} />
      </>
    ),
  },
};

export const WithCustomColor: Story = {
  args: {
    color: 'secondary',
    children: (
      <>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </>
    ),
  },
};

export const WithCustomStyle: Story = {
  args: {
    sx: {
      width: 500,
      backgroundColor: '#f5f5f5',
      borderRadius: 2,
      padding: 1,
    },
    children: (
      <>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </>
    ),
  },
}; 