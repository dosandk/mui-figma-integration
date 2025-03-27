
import figma from "@figma/code-connect";
import {PhotoCameraBackOutlined} from "@mui/icons-material";

figma.connect(
  PhotoCameraBackOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3783",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhotoCameraBackOutlined {...props} />
  }
);