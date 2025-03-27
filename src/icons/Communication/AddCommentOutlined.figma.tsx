
import figma from "@figma/code-connect";
import {AddCommentOutlined} from "@mui/icons-material";

figma.connect(
  AddCommentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3076",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AddCommentOutlined {...props} />
  }
);