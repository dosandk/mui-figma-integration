
import figma from "@figma/code-connect";
import {PhotoSizeSelectSmallOutlined} from "@mui/icons-material";

figma.connect(
  PhotoSizeSelectSmallOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3580",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhotoSizeSelectSmallOutlined {...props} />
  }
);