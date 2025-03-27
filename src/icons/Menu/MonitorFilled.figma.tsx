
import figma from "@figma/code-connect";
import {MonitorFilled} from "@mui/icons-material";

figma.connect(
  MonitorFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112417",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MonitorFilled {...props} />
  }
);