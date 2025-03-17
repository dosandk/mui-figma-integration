import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './index';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const meta: Meta<typeof Rating> = {
  title: 'Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The rating value',
    },
    precision: {
      control: 'number',
      description: 'The granularity with which the rating can change',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      description: 'The color of the component',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the rating will be read-only',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the rating will be disabled',
    },
    max: {
      control: 'number',
      description: 'Maximum rating',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: () => <Rating />,
};

export const WithValue: Story = {
  render: () => <Rating value={3.5} />,
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating size="small" value={3} />
      <Rating size="medium" value={3} />
      <Rating size="large" value={3} />
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating color="primary" value={3} />
      <Rating color="secondary" value={3} />
      <Rating color="success" value={3} />
      <Rating color="error" value={3} />
      <Rating color="info" value={3} />
      <Rating color="warning" value={3} />
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating value={3} readOnly />
      <Rating value={3.5} readOnly />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rating value={3} disabled />
      <Rating value={3.5} disabled />
    </div>
  ),
};

export const CustomMax: Story = {
  render: () => <Rating max={10} value={7} />,
};

export const CustomPrecision: Story = {
  render: () => <Rating precision={0.5} value={3.5} />,
};

export const CustomIcons: Story = {
  render: () => (
    <Rating
      icon={<Favorite />}
      emptyIcon={<FavoriteBorder />}
      value={3}
      sx={{ color: 'error.main' }}
    />
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <Rating
      value={4}
      sx={{
        '& .MuiRating-iconFilled': {
          color: 'success.main',
        },
        '& .MuiRating-iconHover': {
          color: 'success.light',
        },
      }}
    />
  ),
}; 