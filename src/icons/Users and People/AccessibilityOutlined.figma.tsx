
import figma from "@figma/code-connect";
import {AccessibilityOutlined} from "@mui/icons-material";

figma.connect(
  AccessibilityOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867069",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccessibilityOutlined {...props} />
  }
);