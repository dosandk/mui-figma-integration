import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from "@mui/material";

export interface AvatarProps extends Omit<MuiAvatarProps, 'color'> {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'circular' | 'rounded' | 'square';
  alt?: string;
  src?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Avatar = ({
  color = 'primary',
  variant = 'circular',
  alt,
  src,
  children,
  onClick,
  onError,
  ...rest
}: AvatarProps) => {
  return (
    <MuiAvatar
      color={color}
      variant={variant}
      alt={alt}
      src={src}
      onClick={onClick}
      onError={onError}
      {...rest}
    >
      {children}
    </MuiAvatar>
  );
}; 