
import figma from "@figma/code-connect";
import {CollectionsBookmarkFilled} from "@mui/icons-material";

figma.connect(
  CollectionsBookmarkFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13214",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CollectionsBookmarkFilled {...props} />
  }
);