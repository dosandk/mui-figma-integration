
import figma from "@figma/code-connect";
import {InfoFilled} from "@mui/icons-material";

figma.connect(
  InfoFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112415",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InfoFilled {...props} />
  }
);