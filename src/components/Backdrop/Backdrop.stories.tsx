import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './index';
import { CircularProgress } from '@mui/material';

/**
 * Backdrop Component Stories
 * 
 * This file contains all the stories for the Backdrop component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-backdrop/
 */
const meta: Meta<typeof Backdrop> = {
  title: 'Atoms/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the backdrop is open',
    },
    invisible: {
      control: 'boolean',
      description: 'If true, the backdrop is invisible',
    },
    transitionDuration: {
      control: 'number',
      description: 'The duration for the transition, in milliseconds',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

/**
 * Default Story
 * 
 * Shows a basic backdrop with loading spinner.
 */
export const Default: Story = {
  args: {
    open: true,
    children: <CircularProgress color="inherit" />,
  },
};

/**
 * Invisible Story
 * 
 * Demonstrates an invisible backdrop with loading spinner.
 */
export const Invisible: Story = {
  args: {
    open: true,
    invisible: true,
    children: <CircularProgress color="inherit" />,
  },
};

/**
 * WithCustomTransition Story
 * 
 * Shows a backdrop with custom transition duration.
 */
export const WithCustomTransition: Story = {
  args: {
    open: true,
    transitionDuration: 500,
    children: <CircularProgress color="inherit" />,
  },
};

/**
 * WithCustomContent Story
 * 
 * Demonstrates a backdrop with custom styled content.
 */
export const WithCustomContent: Story = {
  args: {
    open: true,
    children: (
      <div style={{ color: 'red', textAlign: 'center', backgroundColor: 'blue', height: "200px" }}>
        <CircularProgress color="inherit" />
        <p style={{ marginTop: '16px' }}>Loading...</p>
      </div>
    ),
  },
}; 