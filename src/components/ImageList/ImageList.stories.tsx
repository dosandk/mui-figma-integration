import type { Meta, StoryObj } from '@storybook/react';
import { ImageList, ImageListItemComponent, ImageListItemBarComponent } from './index';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("ImageList");

/**
 * Sample image data for the ImageList stories
 */
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9d7cd96d9038',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7bef7cf7',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99b5e1bd87b',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b8ca1c0f1f4',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357673648-bf5b3c0aa14b',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1580479946901-7fd5f51b37e9',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

/**
 * ImageList Component Stories
 * 
 * This file contains all the stories for the ImageList component, showcasing different layouts and styling options.
 * 
 * https://mui.com/material-ui/react-image-list/
 */
const meta: Meta<typeof ImageList> = {
  title: 'Molecules/ImageList',
  component: ImageList,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'number',
      description: 'Number of columns in the grid',
    },
    rowHeight: {
      control: 'number',
      description: 'Height of each row in pixels',
    },
    gap: {
      control: 'number',
      description: 'Gap between items in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageList>;

/**
 * Default Story
 * 
 * Shows a basic image list with standard grid layout and item bars.
 */
export const Default: Story = {
  render: () => (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItemComponent key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBarComponent
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItemComponent>
      ))}
    </ImageList>
  ),
};

/**
 * Quilted Story
 * 
 * Demonstrates a quilted image list with varying item sizes and overlapping effects.
 */
export const Quilted: Story = {
  render: () => (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItemComponent
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBarComponent
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItemComponent>
      ))}
    </ImageList>
  ),
};

/**
 * Masonry Story
 * 
 * Shows a masonry layout with different image heights and responsive columns.
 */
export const Masonry: Story = {
  render: () => (
    <ImageList
      variant="masonry"
      cols={3}
      gap={8}
      sx={{ width: 500, height: 450 }}
    >
      {itemData.map((item) => (
        <ImageListItemComponent key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{ display: 'block' }}
          />
          <ImageListItemBarComponent
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItemComponent>
      ))}
    </ImageList>
  ),
};

/**
 * WithCustomStyle Story
 * 
 * Demonstrates an image list with custom styling including rounded corners and gradient overlays.
 */
export const WithCustomStyle: Story = {
  render: () => (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        '& .MuiImageListItem-root': {
          overflow: 'hidden',
          borderRadius: 1,
        },
        '& .MuiImageListItemBar-root': {
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
      }}
    >
      {itemData.slice(0, 4).map((item) => (
        <ImageListItemComponent key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBarComponent
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItemComponent>
      ))}
    </ImageList>
  ),
}; 