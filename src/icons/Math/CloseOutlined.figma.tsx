
import figma from "@figma/code-connect";
import {CloseOutlined} from "@mui/icons-material";

figma.connect(
  CloseOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54257",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CloseOutlined {...props} />
  }
);