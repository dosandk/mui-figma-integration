import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';
import { Box } from '@mui/material';
import { Mail as MailIcon } from '@mui/icons-material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Badge");

/**
 * Badge Component Stories
 * 
 * This file contains all the stories for the Badge component, showcasing different variants, colors, positions, and interactive features.
 * 
 * https://mui.com/material-ui/react-badge/
 */
const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
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

/**
 * Default Story
 * 
 * Shows a basic badge with a numeric content.
 */
export const Default: Story = {
  args: {
    role: "status",
  },
  render: () => (
    <Badge badgeContent={4} role="status">
      <MailIcon />
    </Badge>
  ),
};

/**
 * DifferentColors Story
 * 
 * Demonstrates badges with different theme colors.
 */
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

/**
 * DotVariant Story
 * 
 * Shows a badge with the dot variant instead of numeric content.
 */
export const DotVariant: Story = {
  render: () => (
    <Badge variant="dot" color="error">
      <MailIcon />
    </Badge>
  ),
};

/**
 * WithMaxValue Story
 * 
 * Demonstrates a badge with a maximum value limit.
 */
export const WithMaxValue: Story = {
  render: () => (
    <Badge badgeContent={100} max={99}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * ShowZero Story
 * 
 * Shows a badge that displays zero instead of hiding it.
 */
export const ShowZero: Story = {
  render: () => (
    <Badge badgeContent={0} showZero>
      <MailIcon />
    </Badge>
  ),
};

/**
 * DifferentPositions Story
 * 
 * Demonstrates badges positioned at different corners of the content.
 */
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

/**
 * WithCustomContent Story
 * 
 * Shows a badge with custom content instead of a number.
 */
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

/**
 * WithOverlap Story
 * 
 * Demonstrates different badge overlap styles.
 */
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

/**
 * Invisible Story
 * 
 * Shows a badge that is invisible but still present in the DOM.
 */
export const Invisible: Story = {
  render: () => (
    <Badge badgeContent={4} invisible>
      <MailIcon />
    </Badge>
  ),
};

/**
 * WithCustomStyling Story
 * 
 * Demonstrates a badge with custom styling and hover effects.
 */
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
