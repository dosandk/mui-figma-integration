import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";

export interface RadioProps extends Omit<MuiRadioProps, 'color'> {
  label?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  FormControlLabelProps?: Omit<FormControlLabelProps, 'control' | 'label'>;
}

export const Radio = ({
  label,
  color = 'primary',
  FormControlLabelProps,
  ...rest
}: RadioProps) => {
  const radio = (
    <MuiRadio
      color={color}
      {...rest}
    />
  );

  if (label) {
    return (
      <FormControlLabel
        control={radio}
        label={label}
        {...FormControlLabelProps}
      />
    );
  }

  return radio;
}; 