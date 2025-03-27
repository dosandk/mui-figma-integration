
import figma from "@figma/code-connect";
import {SpaceDashboardOutlined} from "@mui/icons-material";

figma.connect(
  SpaceDashboardOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:73290",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SpaceDashboardOutlined {...props} />
  }
);