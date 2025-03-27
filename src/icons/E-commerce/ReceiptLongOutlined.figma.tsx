
import figma from "@figma/code-connect";
import {ReceiptLongOutlined} from "@mui/icons-material";

figma.connect(
  ReceiptLongOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11239",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReceiptLongOutlined {...props} />
  }
);