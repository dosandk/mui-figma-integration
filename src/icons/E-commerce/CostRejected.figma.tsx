
import figma from "@figma/code-connect";
import {CostRejected} from "@mui/icons-material";

figma.connect(
  CostRejected, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11305",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CostRejected {...props} />
  }
);