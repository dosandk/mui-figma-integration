
import figma from "@figma/code-connect";
import {InventoryOutlined} from "@mui/icons-material";

figma.connect(
  InventoryOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3599",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InventoryOutlined {...props} />
  }
);