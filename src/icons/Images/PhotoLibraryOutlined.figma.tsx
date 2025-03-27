
import figma from "@figma/code-connect";
import {PhotoLibraryOutlined} from "@mui/icons-material";

figma.connect(
  PhotoLibraryOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3779",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhotoLibraryOutlined {...props} />
  }
);