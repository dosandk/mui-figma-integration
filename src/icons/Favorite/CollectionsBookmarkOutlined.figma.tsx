
import figma from "@figma/code-connect";
import {CollectionsBookmarkOutlined} from "@mui/icons-material";

figma.connect(
  CollectionsBookmarkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3752",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CollectionsBookmarkOutlined {...props} />
  }
);