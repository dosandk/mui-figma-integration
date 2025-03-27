
import figma from "@figma/code-connect";
import {FlagFilled} from "@mui/icons-material";

figma.connect(
  FlagFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12471",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FlagFilled {...props} />
  }
);