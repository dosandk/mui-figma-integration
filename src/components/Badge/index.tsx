import {
  Badge as MuiBadge,
  BadgeOwnProps as MuiBadgeProps
} from "@mui/material";

export interface BadgeProps extends MuiBadgeProps {
  children?: React.ReactNode;
}

export const Badge = ({ children, ...props }: BadgeProps) => {
  return (
    <MuiBadge {...props}>
      {children}
    </MuiBadge>
  );
}; 
