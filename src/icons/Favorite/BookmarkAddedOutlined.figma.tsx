
import figma from "@figma/code-connect";
import {BookmarkAddedOutlined} from "@mui/icons-material";

figma.connect(
  BookmarkAddedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3748",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BookmarkAddedOutlined {...props} />
  }
);