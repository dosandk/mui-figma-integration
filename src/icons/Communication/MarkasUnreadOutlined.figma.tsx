
import figma from "@figma/code-connect";
import {MarkasUnreadOutlined} from "@mui/icons-material";

figma.connect(
  MarkasUnreadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3070",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarkasUnreadOutlined {...props} />
  }
);