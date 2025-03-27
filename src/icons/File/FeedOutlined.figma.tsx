
import figma from "@figma/code-connect";
import {FeedOutlined} from "@mui/icons-material";

figma.connect(
  FeedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3581",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FeedOutlined {...props} />
  }
);