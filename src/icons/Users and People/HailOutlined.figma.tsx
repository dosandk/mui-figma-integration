
import figma from "@figma/code-connect";
import {HailOutlined} from "@mui/icons-material";

figma.connect(
  HailOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867052",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HailOutlined {...props} />
  }
);