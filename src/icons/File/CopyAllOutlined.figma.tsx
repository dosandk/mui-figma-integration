
import figma from "@figma/code-connect";
import {CopyAllOutlined} from "@mui/icons-material";

figma.connect(
  CopyAllOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3606",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CopyAllOutlined {...props} />
  }
);