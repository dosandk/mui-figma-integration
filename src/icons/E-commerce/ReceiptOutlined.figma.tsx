
import figma from "@figma/code-connect";
import {ReceiptOutlined} from "@mui/icons-material";

figma.connect(
  ReceiptOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866964",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReceiptOutlined {...props} />
  }
);