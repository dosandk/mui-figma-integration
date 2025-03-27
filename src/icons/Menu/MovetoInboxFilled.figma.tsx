
import figma from "@figma/code-connect";
import {MovetoInboxFilled} from "@mui/icons-material";

figma.connect(
  MovetoInboxFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13198",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MovetoInboxFilled {...props} />
  }
);