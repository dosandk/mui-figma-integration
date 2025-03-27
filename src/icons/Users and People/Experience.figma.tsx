
import figma from "@figma/code-connect";
import {Experience} from "@mui/icons-material";

figma.connect(
  Experience, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11729",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Experience {...props} />
  }
);