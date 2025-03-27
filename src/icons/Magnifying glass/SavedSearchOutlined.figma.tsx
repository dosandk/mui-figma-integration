
import figma from "@figma/code-connect";
import {SavedSearchOutlined} from "@mui/icons-material";

figma.connect(
  SavedSearchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3699",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SavedSearchOutlined {...props} />
  }
);