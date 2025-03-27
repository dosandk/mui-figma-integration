
import figma from "@figma/code-connect";
import {ViewTimelineFilled} from "@mui/icons-material";

figma.connect(
  ViewTimelineFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13234",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ViewTimelineFilled {...props} />
  }
);