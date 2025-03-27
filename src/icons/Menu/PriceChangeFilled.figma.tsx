
import figma from "@figma/code-connect";
import {PriceChangeFilled} from "@mui/icons-material";

figma.connect(
  PriceChangeFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13250",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PriceChangeFilled {...props} />
  }
);