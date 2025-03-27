
import figma from "@figma/code-connect";
import {SendOutlined} from "@mui/icons-material";

figma.connect(
  SendOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112395",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SendOutlined {...props} />
  }
);