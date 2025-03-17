import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './index';
import { Button } from '@mui/material';
import { Save as SaveIcon, Delete as DeleteIcon, Send as SendIcon } from '@mui/icons-material';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
      description: 'The variant to use',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The component orientation',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component will be disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'contained',
    children: (
      <>
        <Button>
          <SaveIcon />
          Save
        </Button>
        <Button>
          <DeleteIcon />
          Delete
        </Button>
        <Button>
          <SendIcon />
          Send
        </Button>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ButtonGroup variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="error">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    controls: { exclude: ['color'] },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ButtonGroup size="small">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="medium">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="large">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    controls: { exclude: ['size'] },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
}; 