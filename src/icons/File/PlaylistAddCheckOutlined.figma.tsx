
import figma from "@figma/code-connect";
import {PlaylistAddCheckOutlined} from "@mui/icons-material";

figma.connect(
  PlaylistAddCheckOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3590",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlaylistAddCheckOutlined {...props} />
  }
);