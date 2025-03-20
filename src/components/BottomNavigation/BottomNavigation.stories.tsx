import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './index';
import { BottomNavigationAction } from '@mui/material';
import { Restore as RestoreIcon, Favorite as FavoriteIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("BottomNavigation");

/**
 * BottomNavigation Component Stories
 * 
 * This file contains all the stories for the BottomNavigation component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-bottom-navigation/
 */
const meta: Meta<typeof BottomNavigation> = {
  title: 'Organisms/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
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

/**
 * Default Story
 * 
 * Shows a basic bottom navigation with icons and labels.
 */
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

/**
 * WithoutLabels Story
 * 
 * Demonstrates bottom navigation with icons only.
 */
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

/**
 * WithCustomColor Story
 * 
 * Shows bottom navigation with custom theme color.
 */
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

/**
 * WithCustomStyle Story
 * 
 * Demonstrates bottom navigation with custom styling.
 */
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