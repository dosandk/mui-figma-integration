
import figma from "@figma/code-connect";
import {RouteOutlined} from "@mui/icons-material";

figma.connect(
  RouteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12236",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RouteOutlined {...props} />
  }
);