
import figma from "@figma/code-connect";
import {If} from "@mui/icons-material";

figma.connect(
  If, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13005",
  { 
    props: {
    
    },
    example: ({ ...props }) => <If {...props} />
  }
);