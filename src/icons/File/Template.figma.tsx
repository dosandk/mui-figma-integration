
import figma from "@figma/code-connect";
import {Template} from "@mui/icons-material";

figma.connect(
  Template, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12822",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Template {...props} />
  }
);