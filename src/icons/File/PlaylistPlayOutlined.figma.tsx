
import figma from "@figma/code-connect";
import {PlaylistPlayOutlined} from "@mui/icons-material";

figma.connect(
  PlaylistPlayOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3593",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlaylistPlayOutlined {...props} />
  }
);