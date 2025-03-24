import type { Meta, StoryObj } from '@storybook/react';
import { List } from './index';

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListSubheader,
  Divider,
} from '@mui/material';

import {
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Star as StarIcon,
  Send as SendIcon,
  Delete as DeleteIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("List");

/**
 * List Component Stories
 * 
 * This file contains all the stories for the List component, showcasing different configurations and styling options.
 * 
 * https://mui.com/material-ui/react-list/
 */
const meta: Meta<typeof List> = {
  title: 'Molecules/List',
  component: List,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'If true, compact vertical padding designed for keyboard and mouse input will be used',
    },
    disablePadding: {
      control: 'boolean',
      description: 'If true, vertical padding will be removed from the list',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

/**
 * Default Story
 * 
 * Shows a basic list with simple text items.
 */
export const Default: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  ),
};

/**
 * WithIcons Story
 * 
 * Demonstrates a list with icons for each item.
 */
export const WithIcons: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItem>
    </List>
  ),
};

/**
 * WithAvatars Story
 * 
 * Shows a list with avatar icons and secondary text.
 */
export const WithAvatars: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemAvatar>
          <PersonIcon />
        </ListItemAvatar>
        <ListItemText primary="John Doe" secondary="john@example.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <PersonIcon />
        </ListItemAvatar>
        <ListItemText primary="Jane Smith" secondary="jane@example.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <PersonIcon />
        </ListItemAvatar>
        <ListItemText primary="Bob Johnson" secondary="bob@example.com" />
      </ListItem>
    </List>
  ),
};

/**
 * WithSecondaryActions Story
 * 
 * Demonstrates a list with secondary action buttons.
 */
export const WithSecondaryActions: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemText primary="Inbox" />
        <ListItemSecondaryAction>
          <DeleteIcon />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Drafts" />
        <ListItemSecondaryAction>
          <DeleteIcon />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText primary="Trash" />
        <ListItemSecondaryAction>
          <DeleteIcon />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  ),
};

/**
 * WithSubheaders Story
 * 
 * Shows a list with subheaders and dividers for organization.
 */
export const WithSubheaders: Story = {
  render: () => (
    <List>
      <ListSubheader>Recent</ListSubheader>
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <Divider />
      <ListSubheader>Older</ListSubheader>
      <ListItem>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Sent" />
      </ListItem>
    </List>
  ),
};

/**
 * Dense Story
 * 
 * Demonstrates a list with compact vertical padding.
 */
export const Dense: Story = {
  render: () => (
    <List dense>
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Shows a list with custom styling and hover effects.
 */
export const WithCustomStyle: Story = {
  render: () => (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        '& .MuiListItem-root': {
          '&:hover': {
            bgcolor: 'action.hover',
          },
        },
      }}
    >
      <ListItem>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  ),
}; 
