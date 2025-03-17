import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'color'> {
  variant?: 'outlined' | 'filled' | 'standard';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium';
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  minRows?: number;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  InputProps?: MuiTextFieldProps['InputProps'];
  InputLabelProps?: MuiTextFieldProps['InputLabelProps'];
  FormHelperTextProps?: MuiTextFieldProps['FormHelperTextProps'];
}

export const TextField = ({
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  label,
  placeholder,
  value,
  defaultValue,
  required = false,
  disabled = false,
  error = false,
  helperText,
  fullWidth = false,
  multiline = false,
  rows,
  maxRows,
  minRows,
  type = 'text',
  onChange,
  onBlur,
  onFocus,
  InputProps,
  InputLabelProps,
  FormHelperTextProps,
  ...rest
}: TextFieldProps) => {
  return (
    <MuiTextField
      variant={variant}
      color={color}
      size={size}
      label={label}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      FormHelperTextProps={FormHelperTextProps}
      {...rest}
    />
  );
}; 