
import figma from "@figma/code-connect";
import {ReceiptLongFilled} from "@mui/icons-material";

figma.connect(
  ReceiptLongFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13248",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReceiptLongFilled {...props} />
  }
);