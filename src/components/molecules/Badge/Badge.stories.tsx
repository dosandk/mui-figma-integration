import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';
import { Box } from '@mui/material';
import { Mail as MailIcon } from '@mui/icons-material';

const meta: Meta<typeof Badge> = {
  title: 'Molecules/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
    overlap: {
      control: 'select',
      options: ['rectangular', 'circular'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Badge badgeContent={4}>
      <MailIcon />
    </Badge>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="info">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <MailIcon />
      </Badge>
    </Box>
  ),
};

export const DotVariant: Story = {
  render: () => (
    <Badge variant="dot" color="error">
      <MailIcon />
    </Badge>
  ),
};

export const WithMaxValue: Story = {
  render: () => (
    <Badge badgeContent={100} max={99}>
      <MailIcon />
    </Badge>
  ),
};

export const ShowZero: Story = {
  render: () => (
    <Badge badgeContent={0} showZero>
      <MailIcon />
    </Badge>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Badge badgeContent={4} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <MailIcon />
      </Badge>
    </Box>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Badge
      badgeContent={
        <span style={{ fontSize: '0.75rem', padding: '0 4px' }}>
          NEW
        </span>
      }
      color="error"
    >
      <MailIcon />
    </Badge>
  ),
};

export const WithOverlap: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Badge badgeContent={4} overlap="rectangular">
        <MailIcon />
      </Badge>
      <Badge badgeContent={4} overlap="circular">
        <MailIcon />
      </Badge>
    </Box>
  ),
};

export const Invisible: Story = {
  render: () => (
    <Badge badgeContent={4} invisible>
      <MailIcon />
    </Badge>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Badge
      badgeContent={4}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'secondary.main',
          },
        },
      }}
    >
      <MailIcon />
    </Badge>
  ),
}; 
