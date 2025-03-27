
import figma from "@figma/code-connect";
import {ModeCommentOutlined} from "@mui/icons-material";

figma.connect(
  ModeCommentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3049",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ModeCommentOutlined {...props} />
  }
);