
import figma from "@figma/code-connect";
import {ShareLocationOutlined} from "@mui/icons-material";

figma.connect(
  ShareLocationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3134",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShareLocationOutlined {...props} />
  }
);