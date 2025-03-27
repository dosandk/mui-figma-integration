
import figma from "@figma/code-connect";
import {Autosave} from "@mui/icons-material";

figma.connect(
  Autosave, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13003",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Autosave {...props} />
  }
);