
import figma from "@figma/code-connect";
import {ShoppingBagOutlined} from "@mui/icons-material";

figma.connect(
  ShoppingBagOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866963",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShoppingBagOutlined {...props} />
  }
);