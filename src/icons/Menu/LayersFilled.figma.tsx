
import figma from "@figma/code-connect";
import {LayersFilled} from "@mui/icons-material";

figma.connect(
  LayersFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112411",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LayersFilled {...props} />
  }
);