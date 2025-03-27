
import figma from "@figma/code-connect";
import {PermIdentityOutlined} from "@mui/icons-material";

figma.connect(
  PermIdentityOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:50709",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PermIdentityOutlined {...props} />
  }
);