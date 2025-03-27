
import figma from "@figma/code-connect";
import {MarkUnreadChatAltOutlined} from "@mui/icons-material";

figma.connect(
  MarkUnreadChatAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3060",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkUnreadChatAltOutlined {...props} />
  }
);