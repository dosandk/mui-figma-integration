
import figma from "@figma/code-connect";
import {DoneAllOutlined} from "@mui/icons-material";

figma.connect(
  DoneAllOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12382",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoneAllOutlined {...props} />
  }
);