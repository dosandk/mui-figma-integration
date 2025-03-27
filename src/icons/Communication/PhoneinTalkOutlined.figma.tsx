
import figma from "@figma/code-connect";
import {PhoneinTalkOutlined} from "@mui/icons-material";

figma.connect(
  PhoneinTalkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3038",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneinTalkOutlined {...props} />
  }
);