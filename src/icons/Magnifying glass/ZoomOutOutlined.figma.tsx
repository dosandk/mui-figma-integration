
import figma from "@figma/code-connect";
import {ZoomOutOutlined} from "@mui/icons-material";

figma.connect(
  ZoomOutOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3705",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ZoomOutOutlined {...props} />
  }
);