
import figma from "@figma/code-connect";
import {ChatBubbleOutlineOutlined} from "@mui/icons-material";

figma.connect(
  ChatBubbleOutlineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3065",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChatBubbleOutlineOutlined {...props} />
  }
);