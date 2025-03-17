import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Accordion } from './index';

import { FIGMA_PATH } from "../figma.config";

const FIGMA_COMPONENT_NODE = "node-id=6583-45995";
const FIGMA_COPMONENT_URL = `${FIGMA_PATH}?${FIGMA_COMPONENT_NODE}`;

/**
 * Accordion Component Stories
 * 
 * This file contains all the stories for the Accordion component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-accordion/
 */
const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * DefaultAccordion Story
 * 
 * Shows a basic accordion component with default settings and Figma integration.
 */
export const DefaultAccordion: Story = {
  parameters: {
    design: {
      // type: "figspec",
      type: "figma",
      url: FIGMA_COPMONENT_URL
    },
  },
  args: {
    title: 'Accordion Title',
    children: 'Accordion content goes here. You can put any content you want inside the accordion.',
  },
};

/**
 * Expanded Story
 * 
 * Demonstrates an accordion component that is expanded by default.
 */
export const Expanded: Story = {
  args: {
    title: 'Expanded Accordion',
    defaultExpanded: true,
    children: 'This accordion is expanded by default.',
  },
};

/**
 * Disabled Story
 * 
 * Shows an accordion component in its disabled state.
 */
export const Disabled: Story = {
  args: {
    title: 'Disabled Accordion',
    disabled: true,
    ildren: 'This accordion cannot be expanded or collapsed.',
  },
};

