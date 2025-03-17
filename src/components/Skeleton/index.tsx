import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material";

export interface SkeletonProps extends Omit<MuiSkeletonProps, 'color'> {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: number | string;
  height?: number | string;
  animation?: 'pulse' | 'wave' | false;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
}

export const Skeleton = ({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  color = 'primary',
  ...rest
}: SkeletonProps) => {
  return (
    <MuiSkeleton
      variant={variant}
      width={width}
      height={height}
      animation={animation}
      color={color}
      {...rest}
    />
  );
}; 