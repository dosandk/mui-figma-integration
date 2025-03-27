
import figma from "@figma/code-connect";
import {WidgetsFilled} from "@mui/icons-material";

figma.connect(
  WidgetsFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13188",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WidgetsFilled {...props} />
  }
);