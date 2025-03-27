
import figma from "@figma/code-connect";
import {PlaylistAddOutlined} from "@mui/icons-material";

figma.connect(
  PlaylistAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3600",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlaylistAddOutlined {...props} />
  }
);