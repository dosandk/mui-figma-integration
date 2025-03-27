
import figma from "@figma/code-connect";
import {SwapVerticalCircleOutlined} from "@mui/icons-material";

figma.connect(
  SwapVerticalCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11434",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwapVerticalCircleOutlined {...props} />
  }
);