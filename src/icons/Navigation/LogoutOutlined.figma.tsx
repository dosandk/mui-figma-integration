
import figma from "@figma/code-connect";
import {LogoutOutlined} from "@mui/icons-material";

figma.connect(
  LogoutOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:71848",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LogoutOutlined {...props} />
  }
);