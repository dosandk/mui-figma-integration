
import figma from "@figma/code-connect";
import {CloudFilled} from "@mui/icons-material";

figma.connect(
  CloudFilled, 
  "<FIGMA_ICONS_BASE>?node-id=7475:61450",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CloudFilled {...props} />
  }
);