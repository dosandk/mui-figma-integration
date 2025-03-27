
import figma from "@figma/code-connect";
import {ShoppingBasketOutlined} from "@mui/icons-material";

figma.connect(
  ShoppingBasketOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866961",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShoppingBasketOutlined {...props} />
  }
);