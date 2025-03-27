
import figma from "@figma/code-connect";
import {TransportRates2} from "@mui/icons-material";

figma.connect(
  TransportRates2, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12238",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TransportRates2 {...props} />
  }
);