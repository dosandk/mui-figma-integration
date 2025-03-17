import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './index';

/**
 * Link Component Stories
 * 
 * This file contains all the stories for the Link component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-link/
 */
const meta: Meta<typeof Link> = {
  title: 'Molecules/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always'],
      description: 'Controls when the underline should be visible',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the link',
    },
    variant: {
      control: 'select',
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'],
      description: 'The variant to use',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/**
 * Default Story
 * 
 * Shows a basic link with default styling.
 */
export const Default: Story = {
  args: {
    href: '#',
    children: 'Link',
  },
};

/**
 * DifferentUnderlineStyles Story
 * 
 * Demonstrates links with different underline behaviors.
 */
export const DifferentUnderlineStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Link href="#" underline="none">
        No underline
      </Link>
      <Link href="#" underline="hover">
        Hover underline
      </Link>
      <Link href="#" underline="always">
        Always underline
      </Link>
    </div>
  ),
};

/**
 * DifferentColors Story
 * 
 * Shows links with various theme colors.
 */
export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Link href="#" color="primary">
        Primary
      </Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="error">
        Error
      </Link>
      <Link href="#" color="info">
        Info
      </Link>
      <Link href="#" color="success">
        Success
      </Link>
      <Link href="#" color="warning">
        Warning
      </Link>
    </div>
  ),
};

/**
 * DifferentVariants Story
 * 
 * Demonstrates links with different typography variants.
 */
export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Link href="#" variant="h1">
        Heading 1
      </Link>
      <Link href="#" variant="h2">
        Heading 2
      </Link>
      <Link href="#" variant="body1">
        Body 1
      </Link>
      <Link href="#" variant="body2">
        Body 2
      </Link>
      <Link href="#" variant="button">
        Button
      </Link>
      <Link href="#" variant="caption">
        Caption
      </Link>
    </div>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows a link with custom styling and hover effects.
 */
export const WithCustomStyle: Story = {
  args: {
    href: '#',
    children: 'Styled Link',
    sx: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: 'primary.main',
      },
    },
  },
}; 