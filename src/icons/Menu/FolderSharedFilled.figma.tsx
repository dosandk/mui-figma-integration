
import figma from "@figma/code-connect";
import {FolderSharedFilled} from "@mui/icons-material";

figma.connect(
  FolderSharedFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13210",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FolderSharedFilled {...props} />
  }
);