import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export interface TypographyProps extends MuiTypographyProps {
  children: React.ReactNode;
}

export const Typography = ({ children, ...rest }: TypographyProps) => {
  return (
    <MuiTypography {...rest}>
      {children}
    </MuiTypography>
  );
}; 
