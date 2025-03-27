
import figma from "@figma/code-connect";
import {HandymanFilled} from "@mui/icons-material";

figma.connect(
  HandymanFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13258",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HandymanFilled {...props} />
  }
);