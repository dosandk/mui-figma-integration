
import figma from "@figma/code-connect";
import {ExploreOutlined} from "@mui/icons-material";

figma.connect(
  ExploreOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3136",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ExploreOutlined {...props} />
  }
);