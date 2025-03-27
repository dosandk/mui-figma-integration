
import figma from "@figma/code-connect";
import {ViewStreamFilled} from "@mui/icons-material";

figma.connect(
  ViewStreamFilled, 
  "<FIGMA_ICONS_BASE>?node-id=285:93475",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ViewStreamFilled {...props} />
  }
);