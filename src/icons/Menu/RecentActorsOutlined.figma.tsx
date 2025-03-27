
import figma from "@figma/code-connect";
import {RecentActorsOutlined} from "@mui/icons-material";

figma.connect(
  RecentActorsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13152",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RecentActorsOutlined {...props} />
  }
);