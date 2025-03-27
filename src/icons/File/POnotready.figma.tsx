
import figma from "@figma/code-connect";
import {POnotready} from "@mui/icons-material";

figma.connect(
  POnotready, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12975",
  { 
    props: {
    
    },
    example: ({ ...props }) => <POnotready {...props} />
  }
);