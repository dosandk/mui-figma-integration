
import figma from "@figma/code-connect";
import {SaveManually} from "@mui/icons-material";

figma.connect(
  SaveManually, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12789",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SaveManually {...props} />
  }
);