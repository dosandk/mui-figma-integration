import {
  Badge as MuiBadge,
  // BadgeProps as MuiBadgeProps
  BadgeOwnProps as MuiBadgeProps
} from "@mui/material";

export interface BadgeProps extends Omit<MuiBadgeProps, 'color'> {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'standard' | 'dot';
  badgeContent?: React.ReactNode;
  max?: number;
  showZero?: boolean;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  children?: React.ReactNode;
  invisible?: boolean;
  overlap?: 'rectangular' | 'circular';
}

export const Badge = ({
  color = 'primary',
  variant = 'standard',
  badgeContent,
  max = 99,
  showZero = false,
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
  },
  children,
  invisible = false,
  overlap = 'rectangular',
  ...rest
}: BadgeProps) => {
  return (
    <MuiBadge
      color={color}
      variant={variant}
      badgeContent={badgeContent}
      max={max}
      showZero={showZero}
      anchorOrigin={anchorOrigin}
      invisible={invisible}
      overlap={overlap}
      {...rest}
    >
      {children}
    </MuiBadge>
  );
}; 
