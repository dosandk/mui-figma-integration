
import figma from "@figma/code-connect";
import {ZoominOutlined} from "@mui/icons-material";

figma.connect(
  ZoominOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3703",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ZoominOutlined {...props} />
  }
);