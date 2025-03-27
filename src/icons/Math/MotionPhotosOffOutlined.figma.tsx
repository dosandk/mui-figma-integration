
import figma from "@figma/code-connect";
import {MotionPhotosOffOutlined} from "@mui/icons-material";

figma.connect(
  MotionPhotosOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12633",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MotionPhotosOffOutlined {...props} />
  }
);