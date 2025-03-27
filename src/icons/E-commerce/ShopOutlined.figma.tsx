
import figma from "@figma/code-connect";
import {ShopOutlined} from "@mui/icons-material";

figma.connect(
  ShopOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866959",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShopOutlined {...props} />
  }
);