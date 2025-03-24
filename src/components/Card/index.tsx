import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
  CardContentProps as MuiCardContentProps,
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
  CardMedia as MuiCardMedia,
  CardMediaProps as MuiCardMediaProps,
} from "@mui/material";

export interface CardProps extends MuiCardProps {
  children: React.ReactNode;
}

interface CardContentProps extends MuiCardContentProps {
  children: React.ReactNode;
}

interface CardHeaderProps extends MuiCardHeaderProps {
  children: React.ReactNode;
}

interface CardActionsProps extends MuiCardActionsProps {
  children: React.ReactNode;
}

interface CardMediaProps extends MuiCardMediaProps {
  children: React.ReactNode;
}

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return (
    <MuiCardContent {...props}>{children}</MuiCardContent>
  )
};

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return (
    <MuiCardHeader {...props}>{children}</MuiCardHeader>
  )
};

export const CardActions = ({ children, ...props }: CardActionsProps) => {
  return (
    <MuiCardActions {...props}>{children}</MuiCardActions>
  )
};

export const CardMedia = ({ children, ...props }: CardMediaProps) => {
  return (
    <MuiCardMedia {...props}>{children}</MuiCardMedia>
  )
};

export const Card = ({ children, ...rest }: CardProps) => {
  const header = rest.header ? <Hader></Hader> : null;
  const media = rest.media ? <Media></Media> : null;

  return (
    <MuiCard {...rest}>
      {header}
      {media}
      {children}
    </MuiCard>
  );
}

// import { Card } from "@components";
// import { CardMedia } from "@mui";
// import { CardHeader } from "@component";
//
// export MyPage = () => {
//   return <Card><Button><CardMedia><CardHeader></Card>
// }

