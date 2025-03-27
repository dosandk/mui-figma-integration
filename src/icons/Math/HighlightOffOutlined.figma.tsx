
import figma from "@figma/code-connect";
import {HighlightOffOutlined} from "@mui/icons-material";

figma.connect(
  HighlightOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12631",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HighlightOffOutlined {...props} />
  }
);