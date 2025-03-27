
import figma from "@figma/code-connect";
import {VisibilityOutlined} from "@mui/icons-material";

figma.connect(
  VisibilityOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12573",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VisibilityOutlined {...props} />
  }
);