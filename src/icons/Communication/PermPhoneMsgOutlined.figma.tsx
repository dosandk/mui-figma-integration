
import figma from "@figma/code-connect";
import {PermPhoneMsgOutlined} from "@mui/icons-material";

figma.connect(
  PermPhoneMsgOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3033",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PermPhoneMsgOutlined {...props} />
  }
);