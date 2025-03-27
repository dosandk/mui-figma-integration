
import figma from "@figma/code-connect";
import {RemoveRedEyeFilled} from "@mui/icons-material";

figma.connect(
  RemoveRedEyeFilled, 
  "<FIGMA_ICONS_BASE>?node-id=7475:59914",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RemoveRedEyeFilled {...props} />
  }
);