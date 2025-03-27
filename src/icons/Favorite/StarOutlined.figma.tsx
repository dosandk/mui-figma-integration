
import figma from "@figma/code-connect";
import {StarOutlined} from "@mui/icons-material";

figma.connect(
  StarOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:49603",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StarOutlined {...props} />
  }
);