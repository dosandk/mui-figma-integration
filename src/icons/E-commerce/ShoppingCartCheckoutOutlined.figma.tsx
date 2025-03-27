
import figma from "@figma/code-connect";
import {ShoppingCartCheckoutOutlined} from "@mui/icons-material";

figma.connect(
  ShoppingCartCheckoutOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866979",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShoppingCartCheckoutOutlined {...props} />
  }
);