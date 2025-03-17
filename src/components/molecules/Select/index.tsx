import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  MenuItem,
  MenuItemProps,
  FormControl,
  FormControlProps,
  InputLabel,
  InputLabelProps,
} from "@mui/material";

export interface SelectProps extends Omit<MuiSelectProps, 'color'> {
  label?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium';
  variant?: 'outlined' | 'filled' | 'standard';
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  FormControlProps?: Omit<FormControlProps, 'children'>;
  InputLabelProps?: Omit<InputLabelProps, 'children'>;
  children?: React.ReactNode;
}

export interface SelectItemProps extends MenuItemProps {
  value: string | number;
  children: React.ReactNode;
}

export const SelectItem = ({ value, children, ...rest }: SelectItemProps) => {
  return (
    <MenuItem value={value} {...rest}>
      {children}
    </MenuItem>
  );
};

export const Select = ({
  label,
  color = 'primary',
  size = 'medium',
  variant = 'outlined',
  disabled = false,
  required = false,
  fullWidth = false,
  error = false,
  helperText,
  FormControlProps,
  InputLabelProps,
  children,
  ...rest
}: SelectProps) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
      required={required}
      {...FormControlProps}
    >
      {label && (
        <InputLabel {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        label={label}
        color={color}
        size={size}
        variant={variant}
        disabled={disabled}
        required={required}
        fullWidth={fullWidth}
        error={error}
        {...rest}
      >
        {children}
      </MuiSelect>
      {helperText && (
        <div style={{ color: error ? 'error.main' : 'text.secondary', fontSize: '0.75rem', marginTop: '3px' }}>
          {helperText}
        </div>
      )}
    </FormControl>
  );
}; 