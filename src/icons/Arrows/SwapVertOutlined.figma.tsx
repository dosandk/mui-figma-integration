
import figma from "@figma/code-connect";
import {SwapVertOutlined} from "@mui/icons-material";

figma.connect(
  SwapVertOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11391",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwapVertOutlined {...props} />
  }
);