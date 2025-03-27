
import figma from "@figma/code-connect";
import {OpeninNewOffOutlined} from "@mui/icons-material";

figma.connect(
  OpeninNewOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3465",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OpeninNewOffOutlined {...props} />
  }
);