
import figma from "@figma/code-connect";
import {ReorderOutlined} from "@mui/icons-material";

figma.connect(
  ReorderOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3460",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReorderOutlined {...props} />
  }
);