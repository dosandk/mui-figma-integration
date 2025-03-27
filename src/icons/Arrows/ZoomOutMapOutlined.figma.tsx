
import figma from "@figma/code-connect";
import {ZoomOutMapOutlined} from "@mui/icons-material";

figma.connect(
  ZoomOutMapOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11382",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ZoomOutMapOutlined {...props} />
  }
);