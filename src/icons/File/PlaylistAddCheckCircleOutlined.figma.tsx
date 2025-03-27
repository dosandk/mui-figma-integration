
import figma from "@figma/code-connect";
import {PlaylistAddCheckCircleOutlined} from "@mui/icons-material";

figma.connect(
  PlaylistAddCheckCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3621",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PlaylistAddCheckCircleOutlined {...props} />
  }
);