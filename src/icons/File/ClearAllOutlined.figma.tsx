
import figma from "@figma/code-connect";
import {ClearAllOutlined} from "@mui/icons-material";

figma.connect(
  ClearAllOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3620",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ClearAllOutlined {...props} />
  }
);