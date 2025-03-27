
import figma from "@figma/code-connect";
import {LoyaltyOutlined} from "@mui/icons-material";

figma.connect(
  LoyaltyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866953",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LoyaltyOutlined {...props} />
  }
);