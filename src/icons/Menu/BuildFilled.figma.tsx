
import figma from "@figma/code-connect";
import {BuildFilled} from "@mui/icons-material";

figma.connect(
  BuildFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13182",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BuildFilled {...props} />
  }
);