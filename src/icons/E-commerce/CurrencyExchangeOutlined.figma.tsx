
import figma from "@figma/code-connect";
import {CurrencyExchangeOutlined} from "@mui/icons-material";

figma.connect(
  CurrencyExchangeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11218",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyExchangeOutlined {...props} />
  }
);