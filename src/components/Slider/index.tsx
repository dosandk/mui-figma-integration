import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from "@mui/material";

export interface SliderProps extends Omit<MuiSliderProps, 'color'> {
  value?: number | number[];
  defaultValue?: number | number[];
  min?: number;
  max?: number;
  step?: number;
  marks?: boolean | { value: number; label: string }[];
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size?: 'small' | 'medium';
  valueLabelDisplay?: 'auto' | 'on' | 'off';
  valueLabelFormat?: string | ((value: number) => string);
  onChange?: (event: Event | React.SyntheticEvent, value: number | number[]) => void;
  onChangeCommitted?: (event: Event | React.SyntheticEvent | null, value: number | number[]) => void;
}

export const Slider = ({
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  marks = false,
  disabled = false,
  orientation = 'horizontal',
  color = 'primary',
  size = 'medium',
  valueLabelDisplay = 'auto',
  valueLabelFormat,
  onChange,
  onChangeCommitted,
  ...rest
}: SliderProps) => {
  return (
    <MuiSlider
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      marks={marks}
      disabled={disabled}
      orientation={orientation}
      color={color}
      size={size}
      valueLabelDisplay={valueLabelDisplay}
      valueLabelFormat={valueLabelFormat}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      {...rest}
    />
  );
}; 