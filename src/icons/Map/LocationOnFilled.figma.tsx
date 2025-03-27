
import figma from "@figma/code-connect";
import {LocationOnFilled} from "@mui/icons-material";

figma.connect(
  LocationOnFilled, 
  "<FIGMA_ICONS_BASE>?node-id=7475:67170",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocationOnFilled {...props} />
  }
);