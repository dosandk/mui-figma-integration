
import figma from "@figma/code-connect";
import {ErrorOutlineOutlined} from "@mui/icons-material";

figma.connect(
  ErrorOutlineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:69429",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ErrorOutlineOutlined {...props} />
  }
);