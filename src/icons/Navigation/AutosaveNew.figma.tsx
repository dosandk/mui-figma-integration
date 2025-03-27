
import figma from "@figma/code-connect";
import {AutosaveNew} from "@mui/icons-material";

figma.connect(
  AutosaveNew, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12786",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AutosaveNew {...props} />
  }
);