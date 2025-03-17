import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps
} from "@mui/material";

export interface DividerProps extends MuiDividerProps {
  textAlign?: 'left' | 'center' | 'right';
  variant?: 'fullWidth' | 'inset' | 'middle';
  orientation?: 'horizontal' | 'vertical';
  flexItem?: boolean;
}

export const Divider = ({ 
  textAlign = 'center',
  variant = 'fullWidth',
  orientation = 'horizontal',
  flexItem = false,
  children,
  ...rest 
}: DividerProps) => {
  return (
    <MuiDivider
      textAlign={textAlign}
      variant={variant}
      orientation={orientation}
      flexItem={flexItem}
      {...rest}
    >
      {children}
    </MuiDivider>
  );
}; 