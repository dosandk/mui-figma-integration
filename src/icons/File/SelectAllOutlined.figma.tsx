
import figma from "@figma/code-connect";
import {SelectAllOutlined} from "@mui/icons-material";

figma.connect(
  SelectAllOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3588",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SelectAllOutlined {...props} />
  }
);