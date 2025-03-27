
import figma from "@figma/code-connect";
import {VerifiedUserFilled} from "@mui/icons-material";

figma.connect(
  VerifiedUserFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13222",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VerifiedUserFilled {...props} />
  }
);