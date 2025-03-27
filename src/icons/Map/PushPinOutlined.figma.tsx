
import figma from "@figma/code-connect";
import {PushPinOutlined} from "@mui/icons-material";

figma.connect(
  PushPinOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3140",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PushPinOutlined {...props} />
  }
);