
import figma from "@figma/code-connect";
import {FullscreenOutlined} from "@mui/icons-material";

figma.connect(
  FullscreenOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3470",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FullscreenOutlined {...props} />
  }
);