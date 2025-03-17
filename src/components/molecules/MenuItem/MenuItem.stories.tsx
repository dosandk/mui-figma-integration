import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@mui/material';
import { MenuItem } from './index';
import {
  ContentCopy as ContentCopyIcon,
  ContentCut as ContentCutIcon,
  ContentPaste as ContentPasteIcon,
} from '@mui/icons-material';

const meta: Meta<typeof MenuItem> = {
  title: 'Molecules/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Menu open>
        <Story />
      </Menu>
    ),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'If true, the menu item will be disabled',
    },
    selected: {
      control: 'boolean',
      description: 'If true, the menu item will be selected',
    },
    dense: {
      control: 'boolean',
      description: 'If true, compact vertical padding designed for keyboard and mouse input will be used',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    children: 'Menu Item',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <ContentCopyIcon sx={{ mr: 1 }} />
        Copy
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Menu Item',
    disabled: true,
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected Menu Item',
    selected: true,
  },
};

export const Dense: Story = {
  args: {
    children: 'Dense Menu Item',
    dense: true,
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: 'Styled Menu Item',
    sx: {
      '&:hover': {
        backgroundColor: 'primary.light',
        color: 'primary.contrastText',
      },
    },
  },
};

export const WithSecondaryText: Story = {
  args: {
    children: (
      <div>
        <div>Primary Text</div>
        <div style={{ fontSize: '0.875rem', color: 'text.secondary' }}>
          Secondary Text
        </div>
      </div>
    ),
  },
}; 