
import figma from "@figma/code-connect";
import {LibraryAddCheckOutlined} from "@mui/icons-material";

figma.connect(
  LibraryAddCheckOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12406",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LibraryAddCheckOutlined {...props} />
  }
);