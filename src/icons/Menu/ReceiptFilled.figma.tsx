
import figma from "@figma/code-connect";
import {ReceiptFilled} from "@mui/icons-material";

figma.connect(
  ReceiptFilled, 
  "<FIGMA_ICONS_BASE>?node-id=7475:72641",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReceiptFilled {...props} />
  }
);