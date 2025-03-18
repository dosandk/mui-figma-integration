import {
  Paper as MuiPaper,
  PaperOwnProps as MuiPaperProps,
} from "@mui/material";

export interface PaperProps extends MuiPaperProps {
  children?: React.ReactNode;
  // elevation?: number;
  // square?: boolean;
  // variant?: 'elevation' | 'outlined';
}

export const Paper = ({
  children,
  // elevation = 1,
  // square = false,
  // variant = 'elevation',
  ...rest
}: PaperProps) => {
  return (
    <MuiPaper
      {...rest}
    >
      {children}
    </MuiPaper>
  );
}; 
