
import figma from "@figma/code-connect";
import {TableChartFilled} from "@mui/icons-material";

figma.connect(
  TableChartFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13190",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TableChartFilled {...props} />
  }
);