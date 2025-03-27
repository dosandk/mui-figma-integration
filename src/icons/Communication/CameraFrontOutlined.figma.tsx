
import figma from "@figma/code-connect";
import {CameraFrontOutlined} from "@mui/icons-material";

figma.connect(
  CameraFrontOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3057",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CameraFrontOutlined {...props} />
  }
);