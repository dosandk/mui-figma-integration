import {
  Avatar as MuiAvatar,
  AvatarOwnProps as MuiAvatarProps,
} from "@mui/material";

export interface AvatarProps extends MuiAvatarProps {
  // color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  // variant?: 'circular' | 'rounded' | 'square';
  // alt?: string;
  // src?: string;
  children?: React.ReactNode;
  // onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  // onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Avatar = ({
  // color = 'primary',
  // variant = 'circular',
  // alt,
  // src,
  children,
  // onClick,
  // onError,
  ...rest
}: AvatarProps) => {
  return (
    <MuiAvatar
      {...rest}
    >
      {children}
    </MuiAvatar>
  );
}; 
