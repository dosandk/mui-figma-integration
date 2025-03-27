
import figma from "@figma/code-connect";
import {Inventory2Outlined} from "@mui/icons-material";

figma.connect(
  Inventory2Outlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12950",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Inventory2Outlined {...props} />
  }
);