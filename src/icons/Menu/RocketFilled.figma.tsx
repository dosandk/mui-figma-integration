
import figma from "@figma/code-connect";
import {RocketFilled} from "@mui/icons-material";

figma.connect(
  RocketFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13154",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RocketFilled {...props} />
  }
);