
import figma from "@figma/code-connect";
import {WifiFilled} from "@mui/icons-material";

figma.connect(
  WifiFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112399",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WifiFilled {...props} />
  }
);