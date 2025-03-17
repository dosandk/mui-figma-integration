import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { CircularProgress, LinearProgress } from './index';

const meta: Meta<typeof CircularProgress> = {
  title: 'Molecules/Progress',
  component: CircularProgress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'The variant to use',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      description: 'The color of the component',
    },
    size: {
      control: 'number',
      description: 'The size of the circle',
    },
    thickness: {
      control: 'number',
      description: 'The thickness of the circle',
    },
    value: {
      control: 'number',
      description: 'The value of the progress indicator for the determinate variant',
    },
  },
};

export default meta;

type CircularStory = StoryObj<typeof CircularProgress>;
type LinearStory = StoryObj<typeof LinearProgress>;

// Progress simulation hook
const useProgress = (initialValue = 0) => {
  const [progress, setProgress] = useState(initialValue);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return progress;
};

export const CircularIndeterminate: CircularStory = {
  render: () => (
    <CircularProgress />
  ),
};

export const CircularDeterminate: CircularStory = {
  render: () => {
    const progress = useProgress();
    return <CircularProgress variant="determinate" value={progress} />;
  },
};

export const CircularSizes: CircularStory = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CircularProgress size={24} />
      <CircularProgress size={40} />
      <CircularProgress size={56} />
    </Stack>
  ),
};

export const CircularColors: CircularStory = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CircularProgress color="primary" />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="error" />
      <CircularProgress color="info" />
      <CircularProgress color="warning" />
    </Stack>
  ),
};

export const LinearIndeterminate: LinearStory = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  ),
};

export const LinearDeterminate: LinearStory = {
  render: () => {
    const progress = useProgress();
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    );
  },
};

export const LinearBuffer: LinearStory = {
  render: () => {
    const progress = useProgress();
    const buffer = useProgress(10);
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </Box>
    );
  },
};

export const LinearColors: LinearStory = {
  render: () => (
    <Stack spacing={2}>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="error" />
      <LinearProgress color="info" />
      <LinearProgress color="warning" />
    </Stack>
  ),
};

export const CustomStyles: CircularStory = {
  render: () => {
    const progress = useProgress();
    return (
      <Stack spacing={3}>
        <CircularProgress
          variant="determinate"
          value={progress}
          sx={{
            color: 'success.main',
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
          size={60}
          thickness={5}
        />
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor: 'success.main',
            },
          }}
        />
      </Stack>
    );
  },
}; 