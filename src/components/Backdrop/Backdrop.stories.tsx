import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './index';
import { CircularProgress } from '@mui/material';

const meta: Meta<typeof Backdrop> = {
  title: 'Molecules/Backdrop',
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

export const Default: Story = {
  args: {
    open: true,
    children: <CircularProgress color="inherit" />,
  },
};

export const Invisible: Story = {
  args: {
    open: true,
    invisible: true,
    children: <CircularProgress color="inherit" />,
  },
};

export const WithCustomTransition: Story = {
  args: {
    open: true,
    transitionDuration: 500,
    children: <CircularProgress color="inherit" />,
  },
};

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