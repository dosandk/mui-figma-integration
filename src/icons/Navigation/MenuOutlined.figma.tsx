
import figma from "@figma/code-connect";
import {MenuOutlined} from "@mui/icons-material";

figma.connect(
  MenuOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54416",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MenuOutlined {...props} />
  }
);