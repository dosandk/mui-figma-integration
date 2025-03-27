
import figma from "@figma/code-connect";
import {CardTravelFilled} from "@mui/icons-material";

figma.connect(
  CardTravelFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13174",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CardTravelFilled {...props} />
  }
);