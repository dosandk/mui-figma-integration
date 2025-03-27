
import figma from "@figma/code-connect";
import {EmailOutlined} from "@mui/icons-material";

figma.connect(
  EmailOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112401",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EmailOutlined {...props} />
  }
);