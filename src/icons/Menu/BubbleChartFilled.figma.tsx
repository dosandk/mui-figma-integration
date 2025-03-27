
import figma from "@figma/code-connect";
import {BubbleChartFilled} from "@mui/icons-material";

figma.connect(
  BubbleChartFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13202",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BubbleChartFilled {...props} />
  }
);