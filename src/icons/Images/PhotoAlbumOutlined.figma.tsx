
import figma from "@figma/code-connect";
import {PhotoAlbumOutlined} from "@mui/icons-material";

figma.connect(
  PhotoAlbumOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3780",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhotoAlbumOutlined {...props} />
  }
);