import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './index';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Home, Person, Settings } from '@mui/icons-material';

/**
 * Tabs Component Stories
 * 
 * This file contains all the stories for the Tabs component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-tabs/
 */
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

/**
 * Default tabs configuration used in multiple stories.
 */
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

/**
 * TabsWithState Component
 * 
 * A wrapper component that demonstrates controlled tabs functionality.
 */
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

/**
 * Default Story
 * 
 * Shows basic tabs with default styling and content.
 */
export const Default: Story = {
  render: () => <TabsWithState />,
};

/**
 * WithIcons Story
 * 
 * Demonstrates tabs with icons and labels.
 */
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

/**
 * WithDisabledTab Story
 * 
 * Shows tabs with a disabled tab option.
 */
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

/**
 * VerticalTabs Story
 * 
 * Demonstrates vertically oriented tabs.
 */
export const VerticalTabs: Story = {
  render: () => (
    <Box sx={{ height: 300 }}>
      <TabsWithState orientation="vertical" />
    </Box>
  ),
};

/**
 * ScrollableTabs Story
 * 
 * Shows scrollable tabs with many options.
 */
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

/**
 * FullWidthTabs Story
 * 
 * Demonstrates tabs that take up the full width of the container.
 */
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

/**
 * WithCustomStyling Story
 * 
 * Shows tabs with custom styling for individual tabs and panel.
 */
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