
import figma from "@figma/code-connect";
import {DirectionsWalkOutlined} from "@mui/icons-material";

figma.connect(
  DirectionsWalkOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867074",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DirectionsWalkOutlined {...props} />
  }
);