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
  Foo?: React.ReactNode;
  // onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  // onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Avatar = ({
  children,
  Foo,
  ...rest
}: AvatarProps) => {
  console.error(123, Foo);

  if (Foo) {
    return (<Foo>
      <MuiAvatar {...rest}>
        {children}
      </MuiAvatar>
    </Foo>)
  }

  return (
    <MuiAvatar {...rest}>
      {children}
    </MuiAvatar>
  );
};

