
import figma from "@figma/code-connect";
import {Drag} from "@mui/icons-material";

figma.connect(
  Drag, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12597",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Drag {...props} />
  }
);