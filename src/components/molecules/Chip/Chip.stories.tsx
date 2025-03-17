import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './index';
import { Delete as DeleteIcon } from '@mui/icons-material';

const meta: Meta<typeof Chip> = {
  title: 'Molecules/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'The variant to use',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component will be disabled',
    },
    clickable: {
      control: 'boolean',
      description: 'If true, the chip will be clickable',
    },
    onDelete: {
      control: 'boolean',
      description: 'If true, the chip will be deletable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    clickable: true,
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    onDelete: () => {},
    deleteIcon: <DeleteIcon />,
  },
};

export const WithAvatar: Story = {
  args: {
    label: 'With Avatar',
    avatar: <div style={{ width: 24, height: 24, backgroundColor: '#ccc', borderRadius: '50%' }} />,
  },
};

export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </div>
  ),
  parameters: {
    controls: { exclude: ['variant'] },
  },
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
    </div>
  ),
  parameters: {
    controls: { exclude: ['color'] },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </div>
  ),
  parameters: {
    controls: { exclude: ['size'] },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
  },
};

export const WithCustomStyle: Story = {
  args: {
    label: 'Custom Style',
    sx: {
      backgroundColor: '#f5f5f5',
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
    },
  },
}; 