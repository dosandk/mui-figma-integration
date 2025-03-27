
import figma from "@figma/code-connect";
import {BorderAllOutlined} from "@mui/icons-material";

figma.connect(
  BorderAllOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3216",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderAllOutlined {...props} />
  }
);