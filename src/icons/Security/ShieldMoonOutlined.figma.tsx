
import figma from "@figma/code-connect";
import {ShieldMoonOutlined} from "@mui/icons-material";

figma.connect(
  ShieldMoonOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3419",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShieldMoonOutlined {...props} />
  }
);