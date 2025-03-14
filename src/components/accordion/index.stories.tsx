import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Accordion } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
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
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultAccordion: Story = {
  parameters: {
    design: {
      // type: "figspec",
      type: "figma",
      // url: "https://www.figma.com/design/cwXEuR3Mbo0Me3HHLFNdKG/MUI-for-Figma-v6.1.0---Material-UI?node-id=6583-45995&p=f&m=dev",
      url: "https://www.figma.com/design/cwXEuR3Mbo0Me3HHLFNdKG/MUI-for-Figma-v6.1.0---Material-UI?node-id=6583-45995&m=dev"
      // url: "https://www.figma.com/design/cwXEuR3Mbo0Me3HHLFNdKG/MUI-for-Figma-v6.1.0---Material-UI?node-id=11048-147515&m=dev"
    },
  },
  args: {
    title: 'Accordion Title',
    children: 'Accordion content goes here. You can put any content you want inside the accordion.',
  },
};

export const Expanded: Story = {
  args: {
    title: 'Expanded Accordion',
    defaultExpanded: true,
    children: 'This accordion is expanded by default.',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Accordion',
    disabled: true,
    ildren: 'This accordion cannot be expanded or collapsed.',
  },
};

