
import figma from "@figma/code-connect";
import {WallpaperOutlined} from "@mui/icons-material";

figma.connect(
  WallpaperOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3777",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WallpaperOutlined {...props} />
  }
);