import type { Meta, StoryObj } from '@storybook/react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListSubheader,
  Divider,
} from './index';
import {
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Star as StarIcon,
  Send as SendIcon,
  Delete as DeleteIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const meta: Meta<typeof List> = {
  title: 'Molecules/List',
  component: List,
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