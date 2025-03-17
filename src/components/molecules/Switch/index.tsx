import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from "@mui/material";

export interface SwitchProps extends Omit<MuiSwitchProps, 'color'> {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  edge?: 'start' | 'end' | false;
  required?: boolean;
  inputProps?: MuiSwitchProps['inputProps'];
}

export const Switch = ({
  color = 'primary',
  size = 'medium',
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  edge = false,
  required = false,
  inputProps,
  ...rest
}: SwitchProps) => {
  return (
    <MuiSwitch
      color={color}
      size={size}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      edge={edge}
      required={required}
      inputProps={inputProps}
      {...rest}
    />
  );
}; 