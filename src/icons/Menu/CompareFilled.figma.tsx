
import figma from "@figma/code-connect";
import {CompareFilled} from "@mui/icons-material";

figma.connect(
  CompareFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13270",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CompareFilled {...props} />
  }
);