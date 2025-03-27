
import figma from "@figma/code-connect";
import {ChatBubbleOutlined} from "@mui/icons-material";

figma.connect(
  ChatBubbleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3066",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChatBubbleOutlined {...props} />
  }
);