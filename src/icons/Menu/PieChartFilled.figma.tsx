
import figma from "@figma/code-connect";
import {PieChartFilled} from "@mui/icons-material";

figma.connect(
  PieChartFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13192",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PieChartFilled {...props} />
  }
);