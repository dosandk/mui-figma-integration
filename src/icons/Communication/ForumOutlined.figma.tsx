
import figma from "@figma/code-connect";
import {ForumOutlined} from "@mui/icons-material";

figma.connect(
  ForumOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3063",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ForumOutlined {...props} />
  }
);