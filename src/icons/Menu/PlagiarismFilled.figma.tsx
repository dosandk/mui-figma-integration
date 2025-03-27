
import figma from "@figma/code-connect";
import {PlagiarismFilled} from "@mui/icons-material";

figma.connect(
  PlagiarismFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13164",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlagiarismFilled {...props} />
  }
);