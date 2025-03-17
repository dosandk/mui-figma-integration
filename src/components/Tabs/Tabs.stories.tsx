import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './index';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Home, Person, Settings } from '@mui/icons-material';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'scrollable', 'fullWidth'],
    },
    scrollButtons: {
      control: 'select',
      options: ['auto', true, false],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultTabs = [
  {
    label: 'Tab 1',
    content: <Typography>Content for Tab 1</Typography>,
  },
  {
    label: 'Tab 2',
    content: <Typography>Content for Tab 2</Typography>,
  },
  {
    label: 'Tab 3',
    content: <Typography>Content for Tab 3</Typography>,
  },
];

const TabsWithState = ({ ...rest }: any) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      tabs={defaultTabs}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export const Default: Story = {
  render: () => <TabsWithState />,
};

export const WithIcons: Story = {
  render: () => (
    <TabsWithState
      tabs={[
        {
          label: 'Home',
          icon: <Home />,
          content: <Typography>Home Content</Typography>,
        },
        {
          label: 'Profile',
          icon: <Person />,
          content: <Typography>Profile Content</Typography>,
        },
        {
          label: 'Settings',
          icon: <Settings />,
          content: <Typography>Settings Content</Typography>,
        },
      ]}
    />
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <TabsWithState
      tabs={[
        ...defaultTabs,
        {
          label: 'Disabled Tab',
          content: <Typography>This tab is disabled</Typography>,
          disabled: true,
        },
      ]}
    />
  ),
};

export const VerticalTabs: Story = {
  render: () => (
    <Box sx={{ height: 300 }}>
      <TabsWithState orientation="vertical" />
    </Box>
  ),
};

export const ScrollableTabs: Story = {
  render: () => (
    <TabsWithState
      variant="scrollable"
      scrollButtons="auto"
      tabs={Array.from({ length: 10 }, (_, i) => ({
        label: `Tab ${i + 1}`,
        content: <Typography>Content for Tab {i + 1}</Typography>,
      }))}
    />
  ),
};

export const FullWidthTabs: Story = {
  render: () => (
    <TabsWithState
      variant="fullWidth"
      tabs={[
        {
          label: 'Item One',
          content: <Typography>Content for Item One</Typography>,
        },
        {
          label: 'Item Two',
          content: <Typography>Content for Item Two</Typography>,
        },
        {
          label: 'Item Three',
          content: <Typography>Content for Item Three</Typography>,
        },
      ]}
    />
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <TabsWithState
      tabs={[
        {
          label: 'Tab 1',
          content: <Typography>Content for Tab 1</Typography>,
          sx: { color: 'primary.main' },
        },
        {
          label: 'Tab 2',
          content: <Typography>Content for Tab 2</Typography>,
          sx: { color: 'secondary.main' },
        },
        {
          label: 'Tab 3',
          content: <Typography>Content for Tab 3</Typography>,
          sx: { color: 'error.main' },
        },
      ]}
      TabPanelProps={{
        sx: { backgroundColor: 'grey.100', borderRadius: 1, p: 2 },
      }}
    />
  ),
}; 