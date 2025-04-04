import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './index';
import { TextField } from '@mui/material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Autocomplete");

/**
 * Sample data for autocomplete options
 */
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
];

/**
 * Autocomplete Component Stories
 * 
 * This file contains all the stories for the Autocomplete component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-autocomplete/
 */
const meta: Meta<typeof Autocomplete> = {
  title: 'Molecules/Autocomplete',
  component: Autocomplete,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'If true, the component will accept multiple values',
    },
    freeSolo: {
      control: 'boolean',
      description: 'If true, the component will accept any value',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component will be disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the component will be read only',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

/**
 * Default Story
 * 
 * Shows a basic autocomplete with movie options.
 */
export const Default: Story = {
  args: {
    options: top100Films,
    renderInput: (params) => <TextField {...params} label="Movie" />,
  },
};

/**
 * Multiple Story
 * 
 * Demonstrates autocomplete with multiple selection enabled.
 */
export const Multiple: Story = {
  args: {
    multiple: true,
    options: top100Films,
    renderInput: (params) => <TextField {...params} label="Movies" />,
  },
};

/**
 * FreeSolo Story
 * 
 * Shows autocomplete that accepts any input value.
 */
export const FreeSolo: Story = {
  args: {
    freeSolo: true,
    options: top100Films,
    renderInput: (params) => <TextField {...params} label="Free solo" />,
  },
};

/**
 * Disabled Story
 * 
 * Demonstrates autocomplete in disabled state.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    options: top100Films,
    renderInput: (params) => <TextField {...params} label="Disabled" />,
  },
};

/**
 * ReadOnly Story
 * 
 * Shows autocomplete in read-only state with pre-selected value.
 */
export const ReadOnly: Story = {
  args: {
    readOnly: true,
    options: top100Films,
    defaultValue: top100Films[0],
    renderInput: (params) => <TextField {...params} label="Read only" />,
  },
};

/**
 * Small Story
 * 
 * Demonstrates autocomplete in small size variant.
 */
export const Small: Story = {
  args: {
    size: 'small',
    options: top100Films,
    renderInput: (params) => <TextField {...params} label="Small size" />,
  },
}; 