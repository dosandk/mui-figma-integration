
import figma from "@figma/code-connect";
import {CostUnknown} from "@mui/icons-material";

figma.connect(
  CostUnknown, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11309",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CostUnknown {...props} />
  }
);