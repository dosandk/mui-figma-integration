import {
  Link as MuiLink,
  LinkProps as MuiLinkProps
} from "@mui/material";

export interface LinkProps extends MuiLinkProps {
  children: React.ReactNode;
}

export const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <MuiLink {...rest}>
      {children}
    </MuiLink>
  );
}; 
