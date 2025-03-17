import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Abc } from "./Abc.tsx";
// import { FIGMA_PATH } from "../figma.config";

// const FIGMA_COMPONENT_NODE = "node-id=6543-36648"
// const FIGMA_COPMONENT_URL = `${FIGMA_PATH}?${FIGMA_COMPONENT_NODE}`

const meta = {
  title: 'Theme/Icons/Abc',
  component: Abc,
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
} satisfies Meta<typeof Abc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAbc: Story = {
  args: {
    children: 'Button',
  },
}

