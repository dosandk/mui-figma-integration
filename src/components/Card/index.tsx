import {
  Card as MuiCard,
  CardProps as MuiCardProps
} from "@mui/material";

export interface CardProps extends MuiCardProps {
  children: React.ReactNode;
}

export const Card = ({ children, ...rest }: CardProps) => {
  return (
    <MuiCard {...rest}>
      {children}
    </MuiCard>
  );
} 
