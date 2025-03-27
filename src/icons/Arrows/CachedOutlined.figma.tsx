
import figma from "@figma/code-connect";
import {CachedOutlined} from "@mui/icons-material";

figma.connect(
  CachedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:70209",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CachedOutlined {...props} />
  }
);