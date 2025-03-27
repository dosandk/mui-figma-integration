
import figma from "@figma/code-connect";
import {LibraryBooksOutlined} from "@mui/icons-material";

figma.connect(
  LibraryBooksOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12860",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LibraryBooksOutlined {...props} />
  }
);