
import figma from "@figma/code-connect";
import {TextDecreaseOutlined} from "@mui/icons-material";

figma.connect(
  TextDecreaseOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3180",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextDecreaseOutlined {...props} />
  }
);