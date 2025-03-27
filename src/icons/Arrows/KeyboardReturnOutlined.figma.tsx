
import figma from "@figma/code-connect";
import {KeyboardReturnOutlined} from "@mui/icons-material";

figma.connect(
  KeyboardReturnOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11340",
  { 
    props: {
    
    },
    example: ({ ...props }) => <KeyboardReturnOutlined {...props} />
  }
);