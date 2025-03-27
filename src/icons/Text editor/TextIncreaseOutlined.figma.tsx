
import figma from "@figma/code-connect";
import {TextIncreaseOutlined} from "@mui/icons-material";

figma.connect(
  TextIncreaseOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3186",
  { 
    props: {
    
    },
    example: ({ ...props }) => <TextIncreaseOutlined {...props} />
  }
);