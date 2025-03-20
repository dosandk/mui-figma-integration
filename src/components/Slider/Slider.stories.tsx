import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Slider");

/**
 * Slider Component Stories
 * 
 * This file contains all the stories for the Slider component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-slider/
 */
const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The value of the slider',
    },
    min: {
      control: 'number',
      description: 'The minimum allowed value of the slider',
    },
    max: {
      control: 'number',
      description: 'The maximum allowed value of the slider',
    },
    step: {
      control: 'number',
      description: 'The granularity with which the slider can step through values',
    },
    marks: {
      control: 'boolean',
      description: 'Display marks on the track',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the slider will be disabled',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the slider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

/**
 * Default Story
 * 
 * Shows a basic slider with default settings.
 */
export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

/**
 * WithMarks Story
 * 
 * Shows a slider with marks on the track.
 */
export const WithMarks: Story = {
  args: {
    defaultValue: 50,
    marks: true,
  },
};

/**
 * CustomMarks Story
 * 
 * Demonstrates a slider with custom marks.
 */
export const CustomMarks: Story = {
  args: {
    defaultValue: 50,
    marks: [
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 40, label: '40°C' },
      { value: 60, label: '60°C' },
      { value: 80, label: '80°C' },
      { value: 100, label: '100°C' },
    ],
  },
};

/**
 * RangeSlider Story
 * 
 * Shows a range slider with two thumbs.
 */
export const RangeSlider: Story = {
  args: {
    defaultValue: [20, 80],
    marks: true,
  },
};

/**
 * Disabled Story
 * 
 * Shows a disabled slider.
 */
export const Disabled: Story = {
  args: {
    defaultValue: 50,
    disabled: true,
  },
};

/**
 * Vertical Story
 * 
 * Demonstrates a vertical slider.
 */
export const Vertical: Story = {
  args: {
    defaultValue: 50,
    orientation: 'vertical',
    sx: { height: 200 },
  },
};

/**
 * WithCustomStyle Story
 * 
 * Shows a slider with custom styling.
 */
export const WithCustomStyle: Story = {
  args: {
    defaultValue: 50,
    marks: true,
    sx: {
      color: 'primary.main',
      '& .MuiSlider-thumb': {
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
      '& .MuiSlider-track': {
        height: 8,
        borderRadius: 4,
      },
      '& .MuiSlider-rail': {
        height: 8,
        borderRadius: 4,
      },
    },
  },
}; 