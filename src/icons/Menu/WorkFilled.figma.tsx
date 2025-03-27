
import figma from "@figma/code-connect";
import {WorkFilled} from "@mui/icons-material";

figma.connect(
  WorkFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112404",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WorkFilled {...props} />
  }
);