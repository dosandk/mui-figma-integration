
import figma from "@figma/code-connect";
import {RouteFilled} from "@mui/icons-material";

figma.connect(
  RouteFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13160",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RouteFilled {...props} />
  }
);