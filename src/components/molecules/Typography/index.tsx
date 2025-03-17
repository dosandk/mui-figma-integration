import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

export interface TypographyProps extends MuiTypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit';
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  children: React.ReactNode;
}

export const Typography = ({
  variant = 'body1',
  color = 'inherit',
  align = 'inherit',
  gutterBottom = false,
  noWrap = false,
  paragraph = false,
  children,
  ...rest
}: TypographyProps) => {
  return (
    <MuiTypography
      variant={variant}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      {...rest}
    >
      {children}
    </MuiTypography>
  );
}; 