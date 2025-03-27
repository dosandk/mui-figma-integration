
import figma from "@figma/code-connect";
import {SwapCallsOutlined} from "@mui/icons-material";

figma.connect(
  SwapCallsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11399",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwapCallsOutlined {...props} />
  }
);