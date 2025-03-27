
import figma from "@figma/code-connect";
import {ViewColumnFilled} from "@mui/icons-material";

figma.connect(
  ViewColumnFilled, 
  "<FIGMA_ICONS_BASE>?node-id=208:101688",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ViewColumnFilled {...props} />
  }
);