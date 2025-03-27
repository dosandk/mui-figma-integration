
import figma from "@figma/code-connect";
import {MapFilled} from "@mui/icons-material";

figma.connect(
  MapFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13226",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MapFilled {...props} />
  }
);