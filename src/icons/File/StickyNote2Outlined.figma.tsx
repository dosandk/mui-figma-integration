
import figma from "@figma/code-connect";
import {StickyNote2Outlined} from "@mui/icons-material";

figma.connect(
  StickyNote2Outlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12917",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StickyNote2Outlined {...props} />
  }
);