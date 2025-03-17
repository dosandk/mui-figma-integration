import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './index';

const meta: Meta<typeof Slider> = {
  title: 'Molecules/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The value of the slider',
    },
    defaultValue: {
      control: 'number',
      description: 'The default value of the slider',
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
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the slider',
    },
    valueLabelDisplay: {
      control: 'select',
      options: ['auto', 'on', 'off'],
      description: 'Controls when the value label is displayed',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider />,
};

export const WithValue: Story = {
  render: () => <Slider value={50} />,
};

export const WithMarks: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider
        marks
        step={10}
        valueLabelDisplay="auto"
      />
    </div>
  ),
};

export const CustomMarks: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider
        marks={[
          { value: 0, label: '0°C' },
          { value: 20, label: '20°C' },
          { value: 40, label: '40°C' },
          { value: 60, label: '60°C' },
          { value: 80, label: '80°C' },
          { value: 100, label: '100°C' },
        ]}
        valueLabelDisplay="auto"
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider size="small" defaultValue={50} />
      <Slider size="medium" defaultValue={50} />
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider color="primary" defaultValue={50} />
      <Slider color="secondary" defaultValue={50} />
      <Slider color="success" defaultValue={50} />
      <Slider color="error" defaultValue={50} />
      <Slider color="info" defaultValue={50} />
      <Slider color="warning" defaultValue={50} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider defaultValue={50} />
      <Slider defaultValue={50} disabled />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: 300, padding: '16px 0' }}>
      <Slider orientation="vertical" defaultValue={50} />
    </div>
  ),
};

export const RangeSlider: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider
        defaultValue={[20, 80]}
        valueLabelDisplay="auto"
      />
    </div>
  ),
};

export const CustomStep: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider
        defaultValue={50}
        step={10}
        marks
        valueLabelDisplay="auto"
      />
    </div>
  ),
};

export const CustomRange: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider
        defaultValue={50}
        min={0}
        max={200}
        step={10}
        marks
        valueLabelDisplay="auto"
      />
    </div>
  ),
};

export const CustomValueLabel: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider
        defaultValue={50}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => `${value}°C`}
      />
    </div>
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <div style={{ width: '100%', padding: '0 16px' }}>
      <Slider
        defaultValue={50}
        sx={{
          color: 'success.main',
          '& .MuiSlider-thumb': {
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0 0 0 8px rgba(25, 118, 210, 0.16)',
            },
            '&.Mui-active': {
              boxShadow: '0 0 0 14px rgba(25, 118, 210, 0.16)',
            },
          },
        }}
      />
    </div>
  ),
}; 