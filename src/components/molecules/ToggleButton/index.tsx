import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from "@mui/material";

export interface ToggleButtonProps extends Omit<MuiToggleButtonProps, 'color'> {
  value: string | number;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  selected?: boolean;
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | number) => void;
  children: React.ReactNode;
}

export interface ToggleButtonGroupProps extends Omit<MuiToggleButtonGroupProps, 'color'> {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  value?: string | number | null;
  exclusive?: boolean;
  disabled?: boolean;
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | number | null) => void;
}

export const ToggleButton = ({
  value,
  color = 'primary',
  size = 'medium',
  disabled = false,
  selected = false,
  onChange,
  children,
  ...rest
}: ToggleButtonProps) => {
  return (
    <MuiToggleButton
      value={value}
      color={color}
      size={size}
      disabled={disabled}
      selected={selected}
      onChange={onChange}
      {...rest}
    >
      {children}
    </MuiToggleButton>
  );
};

export const ToggleButtonGroup = ({
  color = 'primary',
  size = 'medium',
  value,
  exclusive = true,
  disabled = false,
  onChange,
  ...rest
}: ToggleButtonGroupProps) => {
  return (
    <MuiToggleButtonGroup
      color={color}
      size={size}
      value={value}
      exclusive={exclusive}
      disabled={disabled}
      onChange={onChange}
      {...rest}
    />
  );
}; 