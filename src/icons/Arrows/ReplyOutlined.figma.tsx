
import figma from "@figma/code-connect";
import {ReplyOutlined} from "@mui/icons-material";

figma.connect(
  ReplyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11533",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReplyOutlined {...props} />
  }
);