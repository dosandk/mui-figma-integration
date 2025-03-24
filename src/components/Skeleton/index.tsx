import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material";

export interface SkeletonProps extends MuiSkeletonProps {
  children?: React.ReactNode;
}

export const Skeleton = ({ children, ...props }: SkeletonProps) => {
  return (
    <MuiSkeleton {...props}>{children}</MuiSkeleton>
  );
}; 
