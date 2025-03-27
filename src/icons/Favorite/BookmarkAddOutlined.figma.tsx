
import figma from "@figma/code-connect";
import {BookmarkAddOutlined} from "@mui/icons-material";

figma.connect(
  BookmarkAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3744",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BookmarkAddOutlined {...props} />
  }
);