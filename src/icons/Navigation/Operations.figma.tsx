
import figma from "@figma/code-connect";
import {Operations} from "@mui/icons-material";

figma.connect(
  Operations, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12750",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Operations {...props} />
  }
);