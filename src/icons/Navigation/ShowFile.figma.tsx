
import figma from "@figma/code-connect";
import {ShowFile} from "@mui/icons-material";

figma.connect(
  ShowFile, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12737",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShowFile {...props} />
  }
);