// import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import Stack from '@mui/material/Stack';
import { fn } from '@storybook/test';
import { Alert, AlertProps } from './index';

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const SeverityTemplate: StoryFn<typeof Alert> = ({ children, ...rest }: AlertProps) => {
  // delete rest.severity;

  return (
    <div>
      <a href="https://mui.com/material-ui/react-alert/#severity">MUI doc</a>

      <Alert {...rest}>{children}</Alert>
    </div>
  );
};


const VariantsTemplate: StoryFn<typeof Alert> = ({ children, ...rest }: AlertProps) => {
  delete rest.severity;
  // delete rest.variant;

  return (
    <div>
      <a href="https://mui.com/material-ui/react-alert/#severity">MUI doc</a>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success" {...rest}>
          {children}
        </Alert>
        <Alert severity="info" {...rest}>
          {children}
        </Alert>
        <Alert severity="warning" {...rest}>
          {children}
        </Alert>
        <Alert severity="error" {...rest}>
          {children}
        </Alert>
      </Stack>
    </div>
  );
};

const OutlinedTemplate: StoryFn<typeof Alert> = ({ children, ...rest }: AlertProps) => {
  delete rest.severity;
  delete rest.variant;

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        This is an outlined success Alert.
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info Alert.
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an outlined warning Alert.
      </Alert>
      <Alert variant="outlined" severity="error">
        This is an outlined error Alert.
      </Alert>
    </Stack>
  )
};


export const DefaultAlert: Story = {
  args: {
    children: "Alert message",
  }
};

export const VariantAlert = {
  render: VariantsTemplate,
  args: {
    children: "Alert message",
  },
  parameters: {
    controls: { include: ["variant"] },
  },
};


export const SeverityAlert = {
  render: SeverityTemplate,
  args: {
    children: "Alert message",
  },
  parameters: {
    controls: { include: ["children", "severity"] },
  }
};


