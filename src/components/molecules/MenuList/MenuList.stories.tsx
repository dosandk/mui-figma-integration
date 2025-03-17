import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@mui/material';
import { MenuList } from './index';
import { MenuItem } from '../MenuItem';
import { Divider } from '@mui/material';
import {
  ContentCopy as ContentCopyIcon,
  ContentCut as ContentCutIcon,
  ContentPaste as ContentPasteIcon,
} from '@mui/icons-material';

const meta: Meta<typeof MenuList> = {
  title: 'Molecules/MenuList',
  component: MenuList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Menu open>
        <Story />
      </Menu>
    ),
  ],
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'If true, compact vertical padding designed for keyboard and mouse input will be used',
    },
    disablePadding: {
      control: 'boolean',
      description: 'If true, vertical padding will be removed from the list',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Default: Story = {
  render: () => (
    <MenuList>
      <MenuItem>
        <ContentCopyIcon sx={{ mr: 1 }} />
        Copy
      </MenuItem>
      <MenuItem>
        <ContentCutIcon sx={{ mr: 1 }} />
        Cut
      </MenuItem>
      <MenuItem>
        <ContentPasteIcon sx={{ mr: 1 }} />
        Paste
      </MenuItem>
    </MenuList>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <MenuList>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <Divider />
      <MenuItem>Logout</MenuItem>
    </MenuList>
  ),
};

export const Dense: Story = {
  render: () => (
    <MenuList dense>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <Divider />
      <MenuItem>Logout</MenuItem>
    </MenuList>
  ),
};

export const WithoutPadding: Story = {
  render: () => (
    <MenuList disablePadding>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <Divider />
      <MenuItem>Logout</MenuItem>
    </MenuList>
  ),
};

export const WithCustomStyle: Story = {
  render: () => (
    <MenuList
      sx={{
        '& .MuiMenuItem-root': {
          '&:hover': {
            backgroundColor: 'primary.light',
            color: 'primary.contrastText',
          },
        },
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <Divider />
      <MenuItem>Logout</MenuItem>
    </MenuList>
  ),
}; 