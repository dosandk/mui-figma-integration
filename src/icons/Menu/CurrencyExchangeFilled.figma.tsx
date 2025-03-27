
import figma from "@figma/code-connect";
import {CurrencyExchangeFilled} from "@mui/icons-material";

figma.connect(
  CurrencyExchangeFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13266",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyExchangeFilled {...props} />
  }
);