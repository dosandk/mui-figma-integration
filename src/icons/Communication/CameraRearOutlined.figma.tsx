
import figma from "@figma/code-connect";
import {CameraRearOutlined} from "@mui/icons-material";

figma.connect(
  CameraRearOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3071",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CameraRearOutlined {...props} />
  }
);