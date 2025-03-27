
import figma from "@figma/code-connect";
import {CheckCircleFilled} from "@mui/icons-material";

figma.connect(
  CheckCircleFilled, 
  "<FIGMA_ICONS_BASE>?node-id=7475:70357",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CheckCircleFilled {...props} />
  }
);