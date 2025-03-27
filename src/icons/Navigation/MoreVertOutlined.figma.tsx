
import figma from "@figma/code-connect";
import {MoreVertOutlined} from "@mui/icons-material";

figma.connect(
  MoreVertOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54449",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MoreVertOutlined {...props} />
  }
);