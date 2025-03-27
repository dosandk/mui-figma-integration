
import figma from "@figma/code-connect";
import {KeyboardTabOutlined} from "@mui/icons-material";

figma.connect(
  KeyboardTabOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11469",
  { 
    props: {
    
    },
    example: ({ ...props }) => <KeyboardTabOutlined {...props} />
  }
);