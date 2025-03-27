
import figma from "@figma/code-connect";
import {BeachAccessFilled} from "@mui/icons-material";

figma.connect(
  BeachAccessFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112418",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BeachAccessFilled {...props} />
  }
);