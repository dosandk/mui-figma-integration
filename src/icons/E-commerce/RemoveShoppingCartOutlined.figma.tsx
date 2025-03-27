
import figma from "@figma/code-connect";
import {RemoveShoppingCartOutlined} from "@mui/icons-material";

figma.connect(
  RemoveShoppingCartOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866974",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RemoveShoppingCartOutlined {...props} />
  }
);