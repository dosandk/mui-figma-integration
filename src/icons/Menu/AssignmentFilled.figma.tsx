
import figma from "@figma/code-connect";
import {AssignmentFilled} from "@mui/icons-material";

figma.connect(
  AssignmentFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13272",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AssignmentFilled {...props} />
  }
);