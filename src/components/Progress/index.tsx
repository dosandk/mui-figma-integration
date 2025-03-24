import {
  CircularProgress as MuiCircularProgress,
  LinearProgress as MuiLinearProgress,
  CircularProgressProps as MuiCircularProgressProps,
  LinearProgressProps as MuiLinearProgressProps,
} from "@mui/material";

export interface CircularProgressProps extends MuiCircularProgressProps { }

export interface LinearProgressProps extends MuiLinearProgressProps { }

export const CircularProgress = ({ ...props }: CircularProgressProps) => {
  return (
    <MuiCircularProgress {...props} />
  );
};

export const LinearProgress = ({ ...props }: LinearProgressProps) => {
  return (
    <MuiLinearProgress {...props} />
  );
}; 
