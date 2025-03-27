
import figma from "@figma/code-connect";
import {EscalatorWarningOutlined} from "@mui/icons-material";

figma.connect(
  EscalatorWarningOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867064",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EscalatorWarningOutlined {...props} />
  }
);