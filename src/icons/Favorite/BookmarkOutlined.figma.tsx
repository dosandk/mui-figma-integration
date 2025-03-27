
import figma from "@figma/code-connect";
import {BookmarkOutlined} from "@mui/icons-material";

figma.connect(
  BookmarkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3743",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BookmarkOutlined {...props} />
  }
);