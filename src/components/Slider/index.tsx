import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from "@mui/material";

export interface SliderProps extends MuiSliderProps { }

export const Slider = ({ ...rest }: SliderProps) => {
  return (
    <MuiSlider {...rest} />
  );
}; 
