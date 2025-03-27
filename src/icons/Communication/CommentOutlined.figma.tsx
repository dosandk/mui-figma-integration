
import figma from "@figma/code-connect";
import {CommentOutlined} from "@mui/icons-material";

figma.connect(
  CommentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3062",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CommentOutlined {...props} />
  }
);