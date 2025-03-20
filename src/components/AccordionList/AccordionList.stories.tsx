import type { Meta, StoryObj } from '@storybook/react';
import { AccordionList } from './index';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("AccordionList");

/**
 * AccordionList Component Stories
 * 
 * This file contains all the stories for the AccordionList component, showcasing different configurations and states.
 * 
 * https://mui.com/material-ui/react-accordion/
 */
const meta = {
  title: 'Molecules/AccordionList',
  component: AccordionList,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AccordionList>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * DefaultAccordionList Story
 * 
 * Shows a basic accordion list with default settings.
 */
export const DefaultAccordionList: Story = {
  args: {
    items: [
      {
        title: 'Accordion 1',
        content: 'Content for accordion 1',
      },
      {
        title: 'Accordion 2',
        content: 'Content for accordion 2',
      },
      {
        title: 'Accordion 3',
        content: 'Content for accordion 3',
      },
    ],
  },
};

/**
 * SingleExpanded Story
 * 
 * Demonstrates an accordion list where only one item can be expanded at a time.
 */
export const SingleExpanded: Story = {
  args: {
    items: [
      {
        title: 'Accordion 1',
        content: 'Content for accordion 1',
      },
      {
        title: 'Accordion 2',
        content: 'Content for accordion 2',
      },
      {
        title: 'Accordion 3',
        content: 'Content for accordion 3',
      },
    ],
    allowMultiple: false,
  },
};


// Backdrop, Badge, BottomNavigation, Breadcrumbs, Button, ButtonGroup, Card, Checkbox, Chip, Container, DataGrid, Dialog, Divider, Drawer, Icon, IconButton, ImageList, Link, List, Menu, Modal, Paper, Popover, Progress, Radio, Rating, Select, Skeleton, Slider, Snackbar, SpeedDial, Stepper, SvgIcon, Switch, Table, Tabs, TextField, ToggleButton, Tooltip, Typography,

