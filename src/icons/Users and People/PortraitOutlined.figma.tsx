
import figma from "@figma/code-connect";
import {PortraitOutlined} from "@mui/icons-material";

figma.connect(
  PortraitOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867049",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PortraitOutlined {...props} />
  }
);