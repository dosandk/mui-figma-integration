
import figma from "@figma/code-connect";
import {ArrowBack} from "@mui/icons-material";

figma.connect(
  ArrowBack, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54046",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ArrowBack {...props} />
  }
);