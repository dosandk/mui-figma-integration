import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";

export interface RadioProps extends MuiRadioProps {
  FormControlLabelProps?: FormControlLabelProps;
  label?: string;
}

export const Radio = ({
  label,
  FormControlLabelProps,
  ...rest
}: RadioProps) => {
  const radio = (
    <MuiRadio {...rest} />
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
