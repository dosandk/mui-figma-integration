
import figma from "@figma/code-connect";
import {ErrorOutlined} from "@mui/icons-material";

figma.connect(
  ErrorOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:69417",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ErrorOutlined {...props} />
  }
);