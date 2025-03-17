import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from "./index.tsx";
import { FIGMA_PATH } from "../figma.config";

const FIGMA_COMPONENT_NODE = "node-id=6543-36648"
const FIGMA_COPMONENT_URL = `${FIGMA_PATH}?${FIGMA_COMPONENT_NODE}`

/**
 * Button Component Stories
 * 
 * This file contains all the stories for the Button component, showcasing different variants and states.
 * 
 * https://mui.com/material-ui/react-button/
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
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
      url: FIGMA_COPMONENT_URL
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

/**
 * MyDefaultButton Story
 * 
 * Shows a custom default button with primary color.
 */
export const MyDefaultButton: Story = {
  args: {
    primary: false,
    label: 'Button',
    color: "primary"
  }
}

/**
 * DisabledButton Story
 * 
 * Demonstrates the button in its disabled state.
 */
export const DisabledButton: Story = {
  args: {
    primary: false,
    label: "Button",
    color: "primary",
    disabled: false
  }
};
