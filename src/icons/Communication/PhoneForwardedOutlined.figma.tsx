
import figma from "@figma/code-connect";
import {PhoneForwardedOutlined} from "@mui/icons-material";

figma.connect(
  PhoneForwardedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3042",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneForwardedOutlined {...props} />
  }
);