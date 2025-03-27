
import figma from "@figma/code-connect";
import {SwapHorizontalCircleOutlined} from "@mui/icons-material";

figma.connect(
  SwapHorizontalCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11436",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwapHorizontalCircleOutlined {...props} />
  }
);