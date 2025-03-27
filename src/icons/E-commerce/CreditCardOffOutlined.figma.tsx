
import figma from "@figma/code-connect";
import {CreditCardOffOutlined} from "@mui/icons-material";

figma.connect(
  CreditCardOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866972",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CreditCardOffOutlined {...props} />
  }
);