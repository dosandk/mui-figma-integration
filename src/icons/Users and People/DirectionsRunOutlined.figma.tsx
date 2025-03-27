
import figma from "@figma/code-connect";
import {DirectionsRunOutlined} from "@mui/icons-material";

figma.connect(
  DirectionsRunOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867055",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DirectionsRunOutlined {...props} />
  }
);