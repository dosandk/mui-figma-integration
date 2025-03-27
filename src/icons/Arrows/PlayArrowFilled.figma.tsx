
import figma from "@figma/code-connect";
import {PlayArrowFilled} from "@mui/icons-material";

figma.connect(
  PlayArrowFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112267",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlayArrowFilled {...props} />
  }
);