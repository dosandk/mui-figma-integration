
import figma from "@figma/code-connect";
import {FolderFilled} from "@mui/icons-material";

figma.connect(
  FolderFilled, 
  "<FIGMA_ICONS_BASE>?node-id=7475:61740",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FolderFilled {...props} />
  }
);