
import figma from "@figma/code-connect";
import {SwapHorizontalCircleFilled} from "@mui/icons-material";

figma.connect(
  SwapHorizontalCircleFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13238",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwapHorizontalCircleFilled {...props} />
  }
);