import type { Meta, StoryObj } from '@storybook/react';
import { Fab } from './index';
import { Add, Edit, Navigation } from '@mui/icons-material';

const meta: Meta<typeof Fab> = {
  title: 'Molecules/Fab',
  component: Fab,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component',
    },
    variant: {
      control: 'select',
      options: ['circular', 'extended'],
      description: 'The variant to use',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  args: {
    children: <Add />,
  },
};

export const Extended: Story = {
  args: {
    variant: 'extended',
    children: (
      <>
        <Navigation sx={{ mr: 1 }} />
        Navigate
      </>
    ),
  },
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Fab color="primary">
        <Add />
      </Fab>
      <Fab color="secondary">
        <Edit />
      </Fab>
      <Fab color="error">
        <Add />
      </Fab>
      <Fab color="info">
        <Add />
      </Fab>
      <Fab color="success">
        <Add />
      </Fab>
      <Fab color="warning">
        <Add />
      </Fab>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Fab size="small">
        <Add />
      </Fab>
      <Fab size="medium">
        <Add />
      </Fab>
      <Fab size="large">
        <Add />
      </Fab>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Add />,
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: <Add />,
    sx: {
      backgroundColor: 'primary.light',
      '&:hover': {
        backgroundColor: 'primary.main',
      },
    },
  },
}; 