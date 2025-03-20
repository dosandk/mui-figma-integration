import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from "@mui/material";

export interface RatingProps extends MuiRatingProps { }

export const Rating = (props: RatingProps) => {
  return (
    <MuiRating {...props} />
  );
}; 
