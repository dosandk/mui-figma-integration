import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from "@mui/material";

export interface RatingProps extends Omit<MuiRatingProps, 'color'> {
  value?: number | null;
  defaultValue?: number;
  precision?: number;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
  readOnly?: boolean;
  disabled?: boolean;
  max?: number;
  onChange?: (event: React.SyntheticEvent, value: number | null) => void;
  onChangeActive?: (event: React.SyntheticEvent, value: number) => void;
  emptyIcon?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Rating = ({
  value,
  defaultValue,
  precision = 1,
  size = 'medium',
  color = 'primary',
  readOnly = false,
  disabled = false,
  max = 5,
  onChange,
  onChangeActive,
  emptyIcon,
  icon,
  ...rest
}: RatingProps) => {
  return (
    <MuiRating
      value={value}
      defaultValue={defaultValue}
      precision={precision}
      size={size}
      color={color}
      readOnly={readOnly}
      disabled={disabled}
      max={max}
      onChange={onChange}
      onChangeActive={onChangeActive}
      emptyIcon={emptyIcon}
      icon={icon}
      {...rest}
    />
  );
}; 