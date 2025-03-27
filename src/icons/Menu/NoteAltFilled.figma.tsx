
import figma from "@figma/code-connect";
import {NoteAltFilled} from "@mui/icons-material";

figma.connect(
  NoteAltFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13256",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NoteAltFilled {...props} />
  }
);