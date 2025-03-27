
import figma from "@figma/code-connect";
import {PreviewFilled} from "@mui/icons-material";

figma.connect(
  PreviewFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13252",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PreviewFilled {...props} />
  }
);