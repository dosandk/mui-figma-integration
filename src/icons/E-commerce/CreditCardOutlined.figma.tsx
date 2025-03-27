
import figma from "@figma/code-connect";
import {CreditCardOutlined} from "@mui/icons-material";

figma.connect(
  CreditCardOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112403",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CreditCardOutlined {...props} />
  }
);