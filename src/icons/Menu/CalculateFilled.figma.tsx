
import figma from "@figma/code-connect";
import {CalculateFilled} from "@mui/icons-material";

figma.connect(
  CalculateFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13206",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CalculateFilled {...props} />
  }
);