
import figma from "@figma/code-connect";
import {RequestPageFilled} from "@mui/icons-material";

figma.connect(
  RequestPageFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13246",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RequestPageFilled {...props} />
  }
);