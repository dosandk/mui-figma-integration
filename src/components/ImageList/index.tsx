import {
  ImageList as MuiImageList,
  ImageListProps as MuiImageListProps,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

export interface ImageItem {
  img: string;
  title: string;
  author?: string;
  featured?: boolean;
  rows?: number;
  cols?: number;
}

export interface ImageListProps {
  cols?: number;
  rowHeight?: number | 'auto';
  gap?: number;
  children: React.ReactNode;
  variant?: 'masonry' | 'quilted' | 'standard';
  sx?: MuiImageListProps['sx'];
}

export const ImageList = ({ 
  cols = 2,
  rowHeight = 'auto',
  gap = 16,
  children,
  variant = 'standard',
  sx,
  ...rest 
}: ImageListProps) => {
  return (
    <MuiImageList
      cols={cols}
      rowHeight={rowHeight}
      gap={gap}
      variant={variant}
      sx={sx}
      {...rest}
    >
      {children}
    </MuiImageList>
  );
};

export const ImageListItemComponent = ImageListItem;
export const ImageListItemBarComponent = ImageListItemBar; 