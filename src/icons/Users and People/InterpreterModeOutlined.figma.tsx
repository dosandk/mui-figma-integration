
import figma from "@figma/code-connect";
import {InterpreterModeOutlined} from "@mui/icons-material";

figma.connect(
  InterpreterModeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11694",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InterpreterModeOutlined {...props} />
  }
);