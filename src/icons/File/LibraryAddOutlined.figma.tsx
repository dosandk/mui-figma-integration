
import figma from "@figma/code-connect";
import {LibraryAddOutlined} from "@mui/icons-material";

figma.connect(
  LibraryAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3609",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LibraryAddOutlined {...props} />
  }
);