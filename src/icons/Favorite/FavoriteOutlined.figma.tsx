
import figma from "@figma/code-connect";
import {FavoriteOutlined} from "@mui/icons-material";

figma.connect(
  FavoriteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:70999",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FavoriteOutlined {...props} />
  }
);