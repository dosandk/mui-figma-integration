
import figma from "@figma/code-connect";
import {MoreOutlined} from "@mui/icons-material";

figma.connect(
  MoreOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3461",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MoreOutlined {...props} />
  }
);