
import figma from "@figma/code-connect";
import {PhoneMissedOutlined} from "@mui/icons-material";

figma.connect(
  PhoneMissedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3074",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneMissedOutlined {...props} />
  }
);