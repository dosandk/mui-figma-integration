
import figma from "@figma/code-connect";
import {PhotoSizeSelectLargeOutlined} from "@mui/icons-material";

figma.connect(
  PhotoSizeSelectLargeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3789",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhotoSizeSelectLargeOutlined {...props} />
  }
);