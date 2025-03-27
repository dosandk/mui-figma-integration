
import figma from "@figma/code-connect";
import {CurrencyYenOutlined} from "@mui/icons-material";

figma.connect(
  CurrencyYenOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866984",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyYenOutlined {...props} />
  }
);