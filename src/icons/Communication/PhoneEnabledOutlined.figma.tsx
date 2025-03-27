
import figma from "@figma/code-connect";
import {PhoneEnabledOutlined} from "@mui/icons-material";

figma.connect(
  PhoneEnabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3037",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneEnabledOutlined {...props} />
  }
);