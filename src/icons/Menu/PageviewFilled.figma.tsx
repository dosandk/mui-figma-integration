
import figma from "@figma/code-connect";
import {PageviewFilled} from "@mui/icons-material";

figma.connect(
  PageviewFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13212",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PageviewFilled {...props} />
  }
);