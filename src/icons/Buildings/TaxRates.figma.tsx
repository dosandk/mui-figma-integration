
import figma from "@figma/code-connect";
import {TaxRates} from "@mui/icons-material";

figma.connect(
  TaxRates, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13437",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TaxRates {...props} />
  }
);