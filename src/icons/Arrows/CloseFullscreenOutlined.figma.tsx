
import figma from "@figma/code-connect";
import {CloseFullscreenOutlined} from "@mui/icons-material";

figma.connect(
  CloseFullscreenOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11426",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CloseFullscreenOutlined {...props} />
  }
);