
import figma from "@figma/code-connect";
import {BookmarksOutlined} from "@mui/icons-material";

figma.connect(
  BookmarksOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3753",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BookmarksOutlined {...props} />
  }
);