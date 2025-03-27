
import figma from "@figma/code-connect";
import {ChatOutlined} from "@mui/icons-material";

figma.connect(
  ChatOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3054",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChatOutlined {...props} />
  }
);