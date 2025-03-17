import {
  CircularProgress as MuiCircularProgress,
  LinearProgress as MuiLinearProgress,
  CircularProgressProps as MuiCircularProgressProps,
  LinearProgressProps as MuiLinearProgressProps,
} from "@mui/material";

export interface CircularProgressProps extends MuiCircularProgressProps {
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  size?: number | string;
  thickness?: number;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
}

export interface LinearProgressProps extends MuiLinearProgressProps {
  value?: number;
  variant?: 'determinate' | 'indeterminate' | 'buffer';
  valueBuffer?: number;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
}

export const CircularProgress = ({
  value,
  variant = 'indeterminate',
  size = 40,
  thickness = 3.6,
  color = 'primary',
  ...rest
}: CircularProgressProps) => {
  return (
    <MuiCircularProgress
      value={value}
      variant={variant}
      size={size}
      thickness={thickness}
      color={color}
      {...rest}
    />
  );
};

export const LinearProgress = ({
  value,
  variant = 'indeterminate',
  valueBuffer,
  color = 'primary',
  ...rest
}: LinearProgressProps) => {
  return (
    <MuiLinearProgress
      value={value}
      variant={variant}
      valueBuffer={valueBuffer}
      color={color}
      {...rest}
    />
  );
}; 