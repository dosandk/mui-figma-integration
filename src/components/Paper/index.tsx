import {
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
} from "@mui/material";

export interface PaperProps extends MuiPaperProps {
  children: React.ReactNode;
  elevation?: number;
  square?: boolean;
  variant?: 'elevation' | 'outlined';
}

export const Paper = ({
  children,
  elevation = 1,
  square = false,
  variant = 'elevation',
  ...rest
}: PaperProps) => {
  return (
    <MuiPaper
      elevation={elevation}
      square={square}
      variant={variant}
      {...rest}
    >
      {children}
    </MuiPaper>
  );
}; 