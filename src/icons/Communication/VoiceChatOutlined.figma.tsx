
import figma from "@figma/code-connect";
import {VoiceChatOutlined} from "@mui/icons-material";

figma.connect(
  VoiceChatOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3069",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VoiceChatOutlined {...props} />
  }
);