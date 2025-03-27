
import figma from "@figma/code-connect";
import {FactCheckFilled} from "@mui/icons-material";

figma.connect(
  FactCheckFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13262",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FactCheckFilled {...props} />
  }
);