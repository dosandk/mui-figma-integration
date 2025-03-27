
import figma from "@figma/code-connect";
import {UnsubscribeOutlined} from "@mui/icons-material";

figma.connect(
  UnsubscribeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3064",
  { 
    props: {
    
    },
    example: ({ ...props }) => <UnsubscribeOutlined {...props} />
  }
);