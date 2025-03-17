import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from './index';
import { ToggleButtonGroup } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined, FormatAlignLeft, FormatAlignCenter, FormatAlignRight, FormatAlignJustify } from '@mui/icons-material';
import { useState } from 'react';

/**
 * ToggleButton Component Stories
 * 
 * This file contains all the stories for the ToggleButton component, showcasing different configurations and group behaviors.
 * 
 * https://mui.com/material-ui/react-toggle-button/
 */
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

/**
 * Default Story
 * 
 * Shows a basic toggle button with default settings.
 */
export const Default: Story = {
  render: () => <ToggleButtonWithState />,
};

/**
 * WithIcon Story
 * 
 * Demonstrates a toggle button with an icon instead of text.
 */
export const WithIcon: Story = {
  render: () => (
    <ToggleButtonWithState>
      <FormatBold />
    </ToggleButtonWithState>
  ),
};

/**
 * DifferentSizes Story
 * 
 * Shows toggle buttons in different sizes: small, medium, and large.
 */
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ToggleButtonWithState size="small">Small</ToggleButtonWithState>
      <ToggleButtonWithState size="medium">Medium</ToggleButtonWithState>
      <ToggleButtonWithState size="large">Large</ToggleButtonWithState>
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Demonstrates toggle buttons with various theme colors.
 */
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

/**
 * Disabled Story
 * 
 * Shows toggle buttons in disabled states, both selected and unselected.
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <ToggleButtonWithState disabled>Disabled</ToggleButtonWithState>
      <ToggleButtonWithState disabled selected>Disabled Selected</ToggleButtonWithState>
    </div>
  ),
};

/**
 * TextFormattingGroup Story
 * 
 * Demonstrates a group of toggle buttons for text formatting options.
 */
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

/**
 * TextAlignmentGroup Story
 * 
 * Shows a group of exclusive toggle buttons for text alignment options.
 */
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

/**
 * WithCustomStyling Story
 * 
 * Demonstrates a toggle button with custom styling for selected and hover states.
 */
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