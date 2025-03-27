
import figma from "@figma/code-connect";
import {PlaylistAddCircleOutlined} from "@mui/icons-material";

figma.connect(
  PlaylistAddCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3592",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlaylistAddCircleOutlined {...props} />
  }
);