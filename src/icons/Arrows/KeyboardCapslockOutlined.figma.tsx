
import figma from "@figma/code-connect";
import {KeyboardCapslockOutlined} from "@mui/icons-material";

figma.connect(
  KeyboardCapslockOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11473",
  { 
    props: {
    
    },
    example: ({ ...props }) => <KeyboardCapslockOutlined {...props} />
  }
);