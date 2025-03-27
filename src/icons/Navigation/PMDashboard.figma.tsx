
import figma from "@figma/code-connect";
import {PMDashboard} from "@mui/icons-material";

figma.connect(
  PMDashboard, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12768",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PMDashboard {...props} />
  }
);