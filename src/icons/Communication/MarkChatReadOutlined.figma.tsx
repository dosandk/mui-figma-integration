
import figma from "@figma/code-connect";
import {MarkChatReadOutlined} from "@mui/icons-material";

figma.connect(
  MarkChatReadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3052",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkChatReadOutlined {...props} />
  }
);