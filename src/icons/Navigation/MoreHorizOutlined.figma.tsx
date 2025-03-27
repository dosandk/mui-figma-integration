
import figma from "@figma/code-connect";
import {MoreHorizOutlined} from "@mui/icons-material";

figma.connect(
  MoreHorizOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54438",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MoreHorizOutlined {...props} />
  }
);