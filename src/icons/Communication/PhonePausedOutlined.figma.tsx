
import figma from "@figma/code-connect";
import {PhonePausedOutlined} from "@mui/icons-material";

figma.connect(
  PhonePausedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3039",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhonePausedOutlined {...props} />
  }
);