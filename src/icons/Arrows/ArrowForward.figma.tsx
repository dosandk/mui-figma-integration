
import figma from "@figma/code-connect";
import {ArrowForward} from "@mui/icons-material";

figma.connect(
  ArrowForward, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54125",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ArrowForward {...props} />
  }
);