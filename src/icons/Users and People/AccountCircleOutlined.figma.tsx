
import figma from "@figma/code-connect";
import {AccountCircleOutlined} from "@mui/icons-material";

figma.connect(
  AccountCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:69571",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccountCircleOutlined {...props} />
  }
);