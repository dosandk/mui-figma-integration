
import figma from "@figma/code-connect";
import {StarBorderOutlined} from "@mui/icons-material";

figma.connect(
  StarBorderOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:49617",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StarBorderOutlined {...props} />
  }
);