
import figma from "@figma/code-connect";
import {VisibilityOffOutlined} from "@mui/icons-material";

figma.connect(
  VisibilityOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12575",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VisibilityOffOutlined {...props} />
  }
);