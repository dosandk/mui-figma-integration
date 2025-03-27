
import figma from "@figma/code-connect";
import {YoutubeSearchedforOutlined} from "@mui/icons-material";

figma.connect(
  YoutubeSearchedforOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3701",
  { 
    props: {
    
    },
    example: ({ ...props }) => <YoutubeSearchedforOutlined {...props} />
  }
);