
import figma from "@figma/code-connect";
import {ReplyAllOutlined} from "@mui/icons-material";

figma.connect(
  ReplyAllOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11535",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReplyAllOutlined {...props} />
  }
);