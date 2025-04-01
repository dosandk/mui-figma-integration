import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';
import { Box, Typography } from '@mui/material';
import { getFigmaPath } from "../figma.config";

// TODO: replace figma path to Divider page, not to the specific component
const FIGMA_COMPONENT_URL = getFigmaPath("DividerHorizontal");

/**
 * Divider Component Stories
 * 
 * This file contains all the stories for the Divider component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-divider/
 */
const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'The alignment of the divider text',
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
      description: 'The variant to use',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The divider orientation',
    },
    flexItem: {
      control: 'boolean',
      description: 'If true, the divider will be a flex item',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

/**
 * Default Story
 * 
 * Shows a basic horizontal divider with default settings.
 */
export const Default: Story = {
  args: {},
};

/**
 * WithText Story
 * 
 * Demonstrates a divider with centered text content.
 */
export const WithText: Story = {
  args: {
    children: 'OR',
  },
};

/**
 * DifferentTextAlignments Story
 * 
 * Shows dividers with different text alignment options.
 */
export const DifferentTextAlignments: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography>Left aligned text</Typography>
      <Divider textAlign="left">Left</Divider>
      <Typography>Center aligned text</Typography>
      <Divider textAlign="center">Center</Divider>
      <Typography>Right aligned text</Typography>
      <Divider textAlign="right">Right</Divider>
    </Box>
  ),
};

/**
 * DifferentVariants Story
 * 
 * Demonstrates different divider variants: fullWidth, inset, and middle.
 */
export const DifferentVariants: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography>Full Width</Typography>
      <Divider variant="fullWidth" />
      <Typography>Inset</Typography>
      <Divider variant="inset" />
      <Typography>Middle</Typography>
      <Divider variant="middle" />
    </Box>
  ),
};

/**
 * Vertical Story
 * 
 * Shows a vertical divider between content sections.
 */
export const Vertical: Story = {
  render: () => (
    <Box sx={{ display: 'flex', height: 100 }}>
      <Typography>Left Content</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>Right Content</Typography>
    </Box>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Demonstrates a divider with custom styling for the line and text.
 */
export const WithCustomStyle: Story = {
  args: {
    children: 'Styled Divider',
    sx: {
      '&::before, &::after': {
        borderColor: 'primary.main',
      },
      '& .MuiDivider-wrapper': {
        color: 'primary.main',
      },
    },
  },
}; 
