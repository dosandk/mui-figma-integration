
import figma from "@figma/code-connect";
import {Code} from "@mui/icons-material";

figma.connect(
  Code, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11982",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Code {...props} />
  }
);