
import figma from "@figma/code-connect";
import {ShoppingCartOutlined} from "@mui/icons-material";

figma.connect(
  ShoppingCartOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:73251",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShoppingCartOutlined {...props} />
  }
);