
import figma from "@figma/code-connect";
import {AttachEmailOutlined} from "@mui/icons-material";

figma.connect(
  AttachEmailOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3045",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AttachEmailOutlined {...props} />
  }
);