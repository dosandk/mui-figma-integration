
import figma from "@figma/code-connect";
import {BookmarkBorderOutlined} from "@mui/icons-material";

figma.connect(
  BookmarkBorderOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3747",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BookmarkBorderOutlined {...props} />
  }
);