
import figma from "@figma/code-connect";
import {InventoryFilled} from "@mui/icons-material";

figma.connect(
  InventoryFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13204",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InventoryFilled {...props} />
  }
);