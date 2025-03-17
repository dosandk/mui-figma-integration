import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { fn } from '@storybook/test';
import { Avatar, AvatarProps } from './index';

import { FIGMA_PATH } from "../../figma.config";

const FIGMA_COMPONENT_NODE = "";
const FIGMA_COPMONENT_URL = `${FIGMA_PATH}?${FIGMA_COMPONENT_NODE}`;

const meta = {
  title: 'Molecules/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
    },
    sizes: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

const VariantsTemplate: StoryFn<typeof Avatar> = ({ ...rest }: AvatarProps) => {
  return (
    <div>
      <a href="https://mui.com/material-ui/react-avatar/">MUI doc</a>
      <Stack direction="row" spacing={2}>
        <Avatar {...rest}>H</Avatar>
        <Avatar {...rest} src="#">B</Avatar>
        <Avatar {...rest} src="#" />
      </Stack>
    </div>
  );
};

const SizesTemplate: StoryFn<typeof Avatar> = ({ ...rest }: AvatarProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...rest} sx={{ width: 24, height: 24 }}>S</Avatar>
      <Avatar {...rest}>M</Avatar>
      <Avatar {...rest} sx={{ width: 56, height: 56 }}>L</Avatar>
    </Stack>
  );
};

export const DefaultAvatar: Story = {
  args: {
    children: "A",
  }
};

export const VariantAvatar = {
  render: VariantsTemplate,
  args: {
    variant: 'circular',
  },
  parameters: {
    controls: { include: ['variant'] },
  },
};

export const SizesAvatar = {
  render: SizesTemplate,
  args: {
    variant: 'circular',
  },
  parameters: {
    controls: { include: ['size'] },
  },
}; 
