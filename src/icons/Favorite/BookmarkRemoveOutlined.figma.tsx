
import figma from "@figma/code-connect";
import {BookmarkRemoveOutlined} from "@mui/icons-material";

figma.connect(
  BookmarkRemoveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3751",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BookmarkRemoveOutlined {...props} />
  }
);