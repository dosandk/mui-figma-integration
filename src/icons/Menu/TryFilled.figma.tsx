
import figma from "@figma/code-connect";
import {TryFilled} from "@mui/icons-material";

figma.connect(
  TryFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13236",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TryFilled {...props} />
  }
);