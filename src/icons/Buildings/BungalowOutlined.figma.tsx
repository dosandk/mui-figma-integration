
import figma from "@figma/code-connect";
import {BungalowOutlined} from "@mui/icons-material";

figma.connect(
  BungalowOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3834",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BungalowOutlined {...props} />
  }
);