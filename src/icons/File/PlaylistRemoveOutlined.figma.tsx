
import figma from "@figma/code-connect";
import {PlaylistRemoveOutlined} from "@mui/icons-material";

figma.connect(
  PlaylistRemoveOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3604",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlaylistRemoveOutlined {...props} />
  }
);