
import figma from "@figma/code-connect";
import {MarkChatUnreadOutlined} from "@mui/icons-material";

figma.connect(
  MarkChatUnreadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3048",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkChatUnreadOutlined {...props} />
  }
);