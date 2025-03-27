
import figma from "@figma/code-connect";
import {WrongLocationOutlined} from "@mui/icons-material";

figma.connect(
  WrongLocationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3133",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WrongLocationOutlined {...props} />
  }
);