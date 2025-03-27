
import figma from "@figma/code-connect";
import {Availability} from "@mui/icons-material";

figma.connect(
  Availability, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11174",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Availability {...props} />
  }
);