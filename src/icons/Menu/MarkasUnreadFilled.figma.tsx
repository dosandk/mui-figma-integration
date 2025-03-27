
import figma from "@figma/code-connect";
import {MarkasUnreadFilled} from "@mui/icons-material";

figma.connect(
  MarkasUnreadFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13224",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkasUnreadFilled {...props} />
  }
);