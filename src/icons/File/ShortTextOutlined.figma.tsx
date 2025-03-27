
import figma from "@figma/code-connect";
import {ShortTextOutlined} from "@mui/icons-material";

figma.connect(
  ShortTextOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3611",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShortTextOutlined {...props} />
  }
);