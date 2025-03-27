
import figma from "@figma/code-connect";
import {StickyNote2Filled} from "@mui/icons-material";

figma.connect(
  StickyNote2Filled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13208",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StickyNote2Filled {...props} />
  }
);