
import figma from "@figma/code-connect";
import {PrivacyTipOutlined} from "@mui/icons-material";

figma.connect(
  PrivacyTipOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3408",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PrivacyTipOutlined {...props} />
  }
);