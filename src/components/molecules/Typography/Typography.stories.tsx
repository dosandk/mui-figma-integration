import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';

const meta: Meta<typeof Typography> = {
  title: 'Molecules/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'inherit'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'],
    },
    align: {
      control: 'select',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => (
    <Typography>Default typography text</Typography>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="button">Button</Typography>
      <Typography variant="overline">Overline</Typography>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="error">Error color text</Typography>
      <Typography color="warning">Warning color text</Typography>
      <Typography color="info">Info color text</Typography>
      <Typography color="success">Success color text</Typography>
    </div>
  ),
};

export const DifferentAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text that spans multiple lines to demonstrate how the text alignment works with longer content.
        This is a sample paragraph that should be justified to show how the text alignment works with multiple lines.
      </Typography>
    </div>
  ),
};

export const WithGutterBottom: Story = {
  render: () => (
    <div>
      <Typography gutterBottom>This text has gutter bottom</Typography>
      <Typography>This text follows immediately after</Typography>
      <Typography gutterBottom>Another text with gutter bottom</Typography>
      <Typography>And another text following immediately</Typography>
    </div>
  ),
};

export const NoWrap: Story = {
  render: () => (
    <Typography noWrap>
      This is a very long text that should not wrap to the next line. It will be truncated with an ellipsis if it exceeds the container width.
    </Typography>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <div>
      <Typography paragraph>
        This is a paragraph with margin bottom. It demonstrates how the paragraph prop adds spacing between text blocks.
      </Typography>
      <Typography paragraph>
        This is another paragraph that follows the first one. The paragraph prop ensures proper spacing between paragraphs.
      </Typography>
      <Typography>
        This is the last paragraph. Notice how the spacing is different from the previous paragraphs.
      </Typography>
    </div>
  ),
};

export const WithCustomStyle: Story = {
  render: () => (
    <Typography
      sx={{
        fontSize: '2rem',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecoration: 'underline',
        letterSpacing: '0.5rem',
      }}
    >
      Custom styled typography
    </Typography>
  ),
}; 