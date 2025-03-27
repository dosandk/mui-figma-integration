
import figma from "@figma/code-connect";
import {ArrowDownward} from "@mui/icons-material";

figma.connect(
  ArrowDownward, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54080",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ArrowDownward {...props} />
  }
);