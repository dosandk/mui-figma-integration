import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './index';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Button");

/**
 * Button Component Stories
 * 
 * This file contains all the stories for the Button component, showcasing different variants, colors, sizes, and states.
 * 
 * https://mui.com/material-ui/react-button/
 */
const meta: Meta<typeof Button> = {
  title: 'Molecules/Button',
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant to use for the button.',
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    color: {
      description: 'The color of the button.',
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    disabled: {
      description: 'Whether the button is disabled.',
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;


type Story = StoryObj<typeof meta>;

/**
 * DefaultButton Story
 * 
 * Displays the default button variant with contained style and Figma integration.
 */
export const DefaultButton: Story = {
  parameters: {
    design: {
      // type: "figspec",
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
  },
  args: {
    variant: 'contained',
    children: 'Button',
  },
}

/**
 * Primary Story
 * 
 * Shows the primary button variant with contained style.
 */
export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

/**
 * Secondary Story
 * 
 * Demonstrates the secondary button variant with outlined style.
 */
export const Secondary: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

/**
 * Text Story
 * 
 * Displays the text-only button variant without background or border.
 */
export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};
