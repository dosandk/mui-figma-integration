
import figma from "@figma/code-connect";
import {SummarizeFilled} from "@mui/icons-material";

figma.connect(
  SummarizeFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13240",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SummarizeFilled {...props} />
  }
);