
import figma from "@figma/code-connect";
import {LoginOutlined} from "@mui/icons-material";

figma.connect(
  LoginOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3471",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LoginOutlined {...props} />
  }
);