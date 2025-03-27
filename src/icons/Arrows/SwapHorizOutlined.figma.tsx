
import figma from "@figma/code-connect";
import {SwapHorizOutlined} from "@mui/icons-material";

figma.connect(
  SwapHorizOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11613:424608",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwapHorizOutlined {...props} />
  }
);