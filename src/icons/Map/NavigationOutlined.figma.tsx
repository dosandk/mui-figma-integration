
import figma from "@figma/code-connect";
import {NavigationOutlined} from "@mui/icons-material";

figma.connect(
  NavigationOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3137",
  { 
    props: {
    
    },
    example: ({ ...props }) => <NavigationOutlined {...props} />
  }
);