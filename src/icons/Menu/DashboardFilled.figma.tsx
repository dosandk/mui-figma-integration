
import figma from "@figma/code-connect";
import {DashboardFilled} from "@mui/icons-material";

figma.connect(
  DashboardFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13264",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DashboardFilled {...props} />
  }
);