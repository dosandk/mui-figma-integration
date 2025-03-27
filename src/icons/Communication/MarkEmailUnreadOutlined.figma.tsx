
import figma from "@figma/code-connect";
import {MarkEmailUnreadOutlined} from "@mui/icons-material";

figma.connect(
  MarkEmailUnreadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3055",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkEmailUnreadOutlined {...props} />
  }
);