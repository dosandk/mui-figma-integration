import {
  Fab as MuiFab,
  FabProps as MuiFabProps
} from "@mui/material";

export interface FabProps extends MuiFabProps {
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'extended';
  disabled?: boolean;
  children: React.ReactNode;
}

export const Fab = ({ 
  color = 'primary',
  size = 'large',
  variant = 'circular',
  disabled = false,
  children,
  ...rest 
}: FabProps) => {
  return (
    <MuiFab
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      {...rest}
    >
      {children}
    </MuiFab>
  );
}; 