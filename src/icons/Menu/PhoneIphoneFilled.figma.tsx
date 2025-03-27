
import figma from "@figma/code-connect";
import {PhoneIphoneFilled} from "@mui/icons-material";

figma.connect(
  PhoneIphoneFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112400",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneIphoneFilled {...props} />
  }
);