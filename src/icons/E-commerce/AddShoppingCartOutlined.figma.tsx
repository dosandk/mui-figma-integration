
import figma from "@figma/code-connect";
import {AddShoppingCartOutlined} from "@mui/icons-material";

figma.connect(
  AddShoppingCartOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11191",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddShoppingCartOutlined {...props} />
  }
);