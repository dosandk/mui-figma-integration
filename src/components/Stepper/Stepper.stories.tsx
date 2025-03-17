import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './index';
import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      control: 'number',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    alternativeLabel: {
      control: 'boolean',
    },
    nonLinear: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const defaultSteps = [
  {
    label: 'Select campaign settings',
    description: 'Choose your campaign settings',
    content: (
      <Box sx={{ p: 2 }}>
        <Typography>Campaign settings content goes here</Typography>
      </Box>
    ),
  },
  {
    label: 'Create an ad group',
    description: 'Set up your ad group',
    content: (
      <Box sx={{ p: 2 }}>
        <Typography>Ad group content goes here</Typography>
      </Box>
    ),
  },
  {
    label: 'Create an ad',
    description: 'Design your ad',
    content: (
      <Box sx={{ p: 2 }}>
        <Typography>Ad content goes here</Typography>
      </Box>
    ),
  },
];

const StepperWithState = ({ orientation, alternativeLabel, nonLinear }: any) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        activeStep={activeStep}
        orientation={orientation}
        alternativeLabel={alternativeLabel}
        nonLinear={nonLinear}
        steps={defaultSteps}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          onClick={activeStep === defaultSteps.length - 1 ? handleReset : handleNext}
        >
          {activeStep === defaultSteps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export const Default: Story = {
  render: () => <StepperWithState />,
};

export const Vertical: Story = {
  render: () => <StepperWithState orientation="vertical" />,
};

export const AlternativeLabel: Story = {
  render: () => <StepperWithState alternativeLabel={true} />,
};

export const NonLinear: Story = {
  render: () => <StepperWithState nonLinear={true} />,
};

export const WithCustomStepProps: Story = {
  render: () => (
    <StepperWithState
      steps={[
        {
          ...defaultSteps[0],
          StepProps: { completed: true },
        },
        ...defaultSteps.slice(1),
      ]}
    />
  ),
};

export const WithCustomStepLabelProps: Story = {
  render: () => (
    <StepperWithState
      steps={[
        {
          ...defaultSteps[0],
          StepLabelProps: { error: true },
        },
        ...defaultSteps.slice(1),
      ]}
    />
  ),
};

export const WithCustomStepContentProps: Story = {
  render: () => (
    <StepperWithState
      steps={[
        {
          ...defaultSteps[0],
          StepContentProps: { sx: { backgroundColor: '#f5f5f5', p: 2 } },
        },
        ...defaultSteps.slice(1),
      ]}
    />
  ),
}; 