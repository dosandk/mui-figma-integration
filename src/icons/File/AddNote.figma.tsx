
import figma from "@figma/code-connect";
import {AddNote} from "@mui/icons-material";

figma.connect(
  AddNote, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12919",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddNote {...props} />
  }
);