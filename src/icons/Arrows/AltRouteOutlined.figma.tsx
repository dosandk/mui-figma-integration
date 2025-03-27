
import figma from "@figma/code-connect";
import {AltRouteOutlined} from "@mui/icons-material";

figma.connect(
  AltRouteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11491",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AltRouteOutlined {...props} />
  }
);