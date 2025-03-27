
import figma from "@figma/code-connect";
import {VideoCameraBackOutlined} from "@mui/icons-material";

figma.connect(
  VideoCameraBackOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3778",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VideoCameraBackOutlined {...props} />
  }
);