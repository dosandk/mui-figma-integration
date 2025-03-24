import {
  ImageList as MuiImageList,
  ImageListProps as MuiImageListProps,
  // ImageListItem,
  // ImageListItemBar,
} from "@mui/material";


export interface ImageListProps extends MuiImageListProps {
  children: React.ReactNode;
}

// export interface ImageItem {
//   img: string;
//   title: string;
//   author?: string;
//   featured?: boolean;
//   rows?: number;
//   cols?: number;
// }
//
// export interface ImageListProps {
//   cols?: number;
//   rowHeight?: number | 'auto';
//   gap?: number;
//   children: React.ReactNode;
//   variant?: 'masonry' | 'quilted' | 'standard';
//   sx?: MuiImageListProps['sx'];
// }

export const ImageList = ({ children, ...props }: ImageListProps) => {
  return (
    <MuiImageList {...props}>
      {children}
    </MuiImageList>
  );
};

// export const ImageListItemComponent = ImageListItem;
// export const ImageListItemBarComponent = ImageListItemBar; 
