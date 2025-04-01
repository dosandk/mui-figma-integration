import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Info, Delete, Edit, Add } from '@mui/icons-material';

import { Tooltip } from './index';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Tooltip");

/**
 * Tooltip Component Stories
 * 
 * This file contains all the stories for the Tooltip component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-tooltip/
 */
const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Default Story
 * 
 * Shows a basic tooltip with default settings.
 */
export const Default: Story = {
  render: (props) => (
    <Tooltip title="This is a tooltip" {...props}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

/**
 * WithIcon Story
 * 
 * Demonstrates a tooltip attached to an icon button.
 */
export const WithIcon: Story = {
  render: () => (
    <Tooltip title="Information">
      <IconButton>
        <Info />
      </IconButton>
    </Tooltip>
  ),
};

/**
 * WithLongText Story
 * 
 * Shows a tooltip with long text content that wraps to multiple lines.
 */
export const WithLongText: Story = {
  render: () => (
    <Tooltip title="This is a very long tooltip text that might wrap to multiple lines to demonstrate how the tooltip handles longer content">
      <Button>Hover for long text</Button>
    </Tooltip>
  ),
};

/**
 * WithHTML Story
 * 
 * Demonstrates a tooltip with HTML content and multiple styled elements.
 */
export const WithHTML: Story = {
  render: () => (
    <Tooltip
      title={
        <Box>
          <Typography variant="body2">This is a tooltip with HTML content</Typography>
          <Typography variant="caption" color="text.secondary">
            Including multiple lines and styling
          </Typography>
        </Box>
      }
    >
      <Button>Hover for HTML content</Button>
    </Tooltip>
  ),
};

/**
 * WithArrow Story
 * 
 * Shows a tooltip with an arrow pointer.
 */
export const WithArrow: Story = {
  render: () => (
    <Tooltip title="With arrow" arrow>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

/**
 * DifferentPlacements Story
 * 
 * Demonstrates tooltips with various placement options around the trigger element.
 */
export const DifferentPlacements: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 4 }}>
      <Tooltip title="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title="Left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip title="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip title="Top Start" placement="top-start">
        <Button>Top Start</Button>
      </Tooltip>
      <Tooltip title="Top End" placement="top-end">
        <Button>Top End</Button>
      </Tooltip>
      <Tooltip title="Bottom Start" placement="bottom-start">
        <Button>Bottom Start</Button>
      </Tooltip>
      <Tooltip title="Bottom End" placement="bottom-end">
        <Button>Bottom End</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * DifferentColors Story
 * 
 * Shows tooltips with different theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Tooltip title="Primary" color="primary">
        <Button>Primary</Button>
      </Tooltip>
      <Tooltip title="Secondary" color="secondary">
        <Button>Secondary</Button>
      </Tooltip>
      <Tooltip title="Error" color="error">
        <Button>Error</Button>
      </Tooltip>
      <Tooltip title="Success" color="success">
        <Button>Success</Button>
      </Tooltip>
      <Tooltip title="Warning" color="warning">
        <Button>Warning</Button>
      </Tooltip>
      <Tooltip title="Info" color="info">
        <Button>Info</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * WithCustomDelay Story
 * 
 * Demonstrates a tooltip with custom enter and leave delay times.
 */
export const WithCustomDelay: Story = {
  render: () => (
    <Tooltip
      title="Delayed tooltip"
      enterDelay={500}
      leaveDelay={200}
    >
      <Button>Hover with delay</Button>
    </Tooltip>
  ),
};

/**
 * WithActionButtons Story
 * 
 * Shows tooltips attached to action buttons in a toolbar layout.
 */
export const WithActionButtons: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Tooltip title="Edit">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add">
        <IconButton>
          <Add />
        </IconButton>
      </Tooltip>
    </Box>
  ),
};

/**
 * WithCustomStyling Story
 * 
 * Demonstrates a tooltip with custom styling for the tooltip container.
 */
export const WithCustomStyling: Story = {
  render: () => (
    <Tooltip
      title="Custom styled tooltip"
      PopperProps={{
        sx: {
          '& .MuiTooltip-tooltip': {
            backgroundColor: 'primary.main',
            color: 'white',
            fontSize: '1rem',
            padding: '8px 16px',
            borderRadius: '4px',
          },
        },
      }}
    >
      <Button>Hover for custom style</Button>
    </Tooltip>
  ),
}; 
