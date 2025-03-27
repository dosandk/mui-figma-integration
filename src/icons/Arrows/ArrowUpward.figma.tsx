
import figma from "@figma/code-connect";
import {ArrowUpward} from "@mui/icons-material";

figma.connect(
  ArrowUpward, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54170",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ArrowUpward {...props} />
  }
);