import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from './index';
import { ToggleButtonGroup } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined, FormatAlignLeft, FormatAlignCenter, FormatAlignRight, FormatAlignJustify } from '@mui/icons-material';
import { useState } from 'react';

const meta: Meta<typeof ToggleButton> = {
  title: 'Molecules/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

const ToggleButtonWithState = ({ ...rest }: any) => {
  const [selected, setSelected] = useState(false);

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string | number) => {
    setSelected(!selected);
  };

  return (
    <ToggleButton
      value="toggle"
      selected={selected}
      onChange={handleChange}
      {...rest}
    >
      Toggle
    </ToggleButton>
  );
};

export const Default: Story = {
  render: () => <ToggleButtonWithState />,
};

export const WithIcon: Story = {
  render: () => (
    <ToggleButtonWithState>
      <FormatBold />
    </ToggleButtonWithState>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ToggleButtonWithState size="small">Small</ToggleButtonWithState>
      <ToggleButtonWithState size="medium">Medium</ToggleButtonWithState>
      <ToggleButtonWithState size="large">Large</ToggleButtonWithState>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ToggleButtonWithState color="primary">Primary</ToggleButtonWithState>
      <ToggleButtonWithState color="secondary">Secondary</ToggleButtonWithState>
      <ToggleButtonWithState color="error">Error</ToggleButtonWithState>
      <ToggleButtonWithState color="success">Success</ToggleButtonWithState>
      <ToggleButtonWithState color="warning">Warning</ToggleButtonWithState>
      <ToggleButtonWithState color="info">Info</ToggleButtonWithState>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ToggleButtonWithState disabled>Disabled</ToggleButtonWithState>
      <ToggleButtonWithState disabled selected>Disabled Selected</ToggleButtonWithState>
    </div>
  ),
};

export const TextFormattingGroup: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>([]);

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats);
    };

    return (
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const TextAlignmentGroup: Story = {
  render: () => {
    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      setAlignment(newAlignment);
    };

    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeft />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenter />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRight />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified">
          <FormatAlignJustify />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const WithCustomStyling: Story = {
  render: () => (
    <ToggleButtonWithState
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        },
      }}
    >
      Custom Style
    </ToggleButtonWithState>
  ),
}; 