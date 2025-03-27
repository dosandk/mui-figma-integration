
import figma from "@figma/code-connect";
import {PhoneLockedOutlined} from "@mui/icons-material";

figma.connect(
  PhoneLockedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3061",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneLockedOutlined {...props} />
  }
);