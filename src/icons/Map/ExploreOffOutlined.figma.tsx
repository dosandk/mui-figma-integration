
import figma from "@figma/code-connect";
import {ExploreOffOutlined} from "@mui/icons-material";

figma.connect(
  ExploreOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3147",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ExploreOffOutlined {...props} />
  }
);