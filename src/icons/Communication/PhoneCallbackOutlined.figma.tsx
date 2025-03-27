
import figma from "@figma/code-connect";
import {PhoneCallbackOutlined} from "@mui/icons-material";

figma.connect(
  PhoneCallbackOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3035",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneCallbackOutlined {...props} />
  }
);