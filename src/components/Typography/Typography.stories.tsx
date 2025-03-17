import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';

/**
 * Typography Component Stories
 * 
 * This file contains all the stories for the Typography component, showcasing different variants, colors, and text styles.
 * 
 * https://mui.com/material-ui/react-typography/
 */
const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant to use for the typography.',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
    },
    color: {
      description: 'The color of the text.',
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    align: {
      description: 'The alignment of the text.',
      control: 'select',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
    gutterBottom: {
      description: 'Whether to add bottom margin to the typography.',
      control: 'boolean',
    },
    noWrap: {
      description: 'Whether to prevent text wrapping.',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/**
 * Default Story
 * 
 * Shows a basic typography component with default styling.
 */
export const Default: Story = {
  args: {
    children: 'Default Typography',
  },
};

/**
 * AllVariants Story
 * 
 * Demonstrates all available typography variants.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">h1. Heading 1</Typography>
      <Typography variant="h2">h2. Heading 2</Typography>
      <Typography variant="h3">h3. Heading 3</Typography>
      <Typography variant="h4">h4. Heading 4</Typography>
      <Typography variant="h5">h5. Heading 5</Typography>
      <Typography variant="h6">h6. Heading 6</Typography>
      <Typography variant="subtitle1">subtitle1. Subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle2. Subtitle 2</Typography>
      <Typography variant="body1">body1. Body Text 1</Typography>
      <Typography variant="body2">body2. Body Text 2</Typography>
      <Typography variant="caption">caption. Caption Text</Typography>
      <Typography variant="button">button. Button Text</Typography>
      <Typography variant="overline">overline. Overline Text</Typography>
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Shows typography with different text colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography color="primary">Primary Color Text</Typography>
      <Typography color="secondary">Secondary Color Text</Typography>
      <Typography color="error">Error Color Text</Typography>
      <Typography color="warning">Warning Color Text</Typography>
      <Typography color="info">Info Color Text</Typography>
      <Typography color="success">Success Color Text</Typography>
    </div>
  ),
};

/**
 * DifferentAlignments Story
 * 
 * Demonstrates different text alignment options.
 */
export const DifferentAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography align="left">Left Aligned Text</Typography>
      <Typography align="center">Center Aligned Text</Typography>
      <Typography align="right">Right Aligned Text</Typography>
      <Typography align="justify">
        Justified Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
};

/**
 * WithGutterBottom Story
 * 
 * Shows typography with bottom margin enabled.
 */
export const WithGutterBottom: Story = {
  render: () => (
    <div>
      <Typography gutterBottom>This text has bottom margin</Typography>
      <Typography>This text follows immediately after</Typography>
    </div>
  ),
};

/**
 * NoWrap Story
 * 
 * Demonstrates typography with text wrapping disabled.
 */
export const NoWrap: Story = {
  render: () => (
    <Typography noWrap>
      This is a very long text that will not wrap to the next line even if it exceeds the container width.
    </Typography>
  ),
};

/**
 * Paragraph Story
 * 
 * Shows typography used for paragraph text.
 */
export const Paragraph: Story = {
  render: () => (
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Typography>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows typography with custom styling applied.
 */
export const WithCustomStyle: Story = {
  render: () => (
    <Typography
      sx={{
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecoration: 'underline',
      }}
    >
      Custom Styled Text
    </Typography>
  ),
}; 