
import figma from "@figma/code-connect";
import {ShareLocationFilled} from "@mui/icons-material";

figma.connect(
  ShareLocationFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13172",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShareLocationFilled {...props} />
  }
);