
import figma from "@figma/code-connect";
import {LibraryMusicOutlined} from "@mui/icons-material";

figma.connect(
  LibraryMusicOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3616",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LibraryMusicOutlined {...props} />
  }
);