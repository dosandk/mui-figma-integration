import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';
import { CardContent, CardActions, Button, Typography, CardMedia, CardHeader, Avatar, IconButton } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: 'The variant to use',
    },
    elevation: {
      control: 'number',
      description: 'Shadow depth, corresponds to dp in the spec',
    },
    sx: {
      control: 'object',
      description: 'The system prop that allows defining system overrides as well as additional CSS styles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a sample card with some content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </>
    ),
  },
};

export const WithMedia: Story = {
  args: {
    children: (
      <>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/800x600"
          alt="Random image"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Card with Media
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card includes a media section with an image.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main' }}>R</Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Card with Header"
          subheader="September 14, 2023"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This card includes a header with an avatar and action buttons.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <CardContent>
          <Typography variant="h5" component="div">
            Outlined Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card uses the outlined variant.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </>
    ),
  },
};

export const WithCustomStyle: Story = {
  args: {
    sx: {
      maxWidth: 345,
      backgroundColor: '#f5f5f5',
      borderRadius: 2,
    },
    children: (
      <>
        <CardContent>
          <Typography variant="h5" component="div">
            Styled Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card has custom styling applied.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </>
    ),
  },
}; 