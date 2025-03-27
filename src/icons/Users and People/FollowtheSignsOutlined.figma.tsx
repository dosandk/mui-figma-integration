
import figma from "@figma/code-connect";
import {FollowtheSignsOutlined} from "@mui/icons-material";

figma.connect(
  FollowtheSignsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867025",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FollowtheSignsOutlined {...props} />
  }
);