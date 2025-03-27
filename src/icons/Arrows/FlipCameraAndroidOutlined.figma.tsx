
import figma from "@figma/code-connect";
import {FlipCameraAndroidOutlined} from "@mui/icons-material";

figma.connect(
  FlipCameraAndroidOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11510",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FlipCameraAndroidOutlined {...props} />
  }
);