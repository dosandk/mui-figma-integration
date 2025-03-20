import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { getFigmaPath } from "../figma.config";

const FIGMA_COMPONENT_URL = getFigmaPath("Button");

/**
 * Button Component Stories
 * 
 * This file contains all the stories for the Button component, showcasing different variants, colors, sizes, and states.
 * 
 * https://mui.com/material-ui/react-button/
 */
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: FIGMA_COMPONENT_URL
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta; 