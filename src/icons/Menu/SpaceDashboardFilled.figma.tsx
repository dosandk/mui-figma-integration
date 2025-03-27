
import figma from "@figma/code-connect";
import {SpaceDashboardFilled} from "@mui/icons-material";

figma.connect(
  SpaceDashboardFilled, 
  "<FIGMA_ICONS_BASE>?node-id=7475:73288",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SpaceDashboardFilled {...props} />
  }
);