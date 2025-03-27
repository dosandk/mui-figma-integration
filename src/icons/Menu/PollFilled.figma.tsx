
import figma from "@figma/code-connect";
import {PollFilled} from "@mui/icons-material";

figma.connect(
  PollFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13254",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PollFilled {...props} />
  }
);