import {
  Link as MuiLink,
  LinkProps as MuiLinkProps
} from "@mui/material";

export interface LinkProps extends MuiLinkProps {
  href: string;
  underline?: 'none' | 'hover' | 'always';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';
  children: React.ReactNode;
}

export const Link = ({ 
  href,
  underline = 'hover',
  color = 'primary',
  variant = 'body1',
  children,
  ...rest 
}: LinkProps) => {
  return (
    <MuiLink
      href={href}
      underline={underline}
      color={color}
      variant={variant}
      {...rest}
    >
      {children}
    </MuiLink>
  );
}; 