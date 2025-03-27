
import figma from "@figma/code-connect";
import {ZoominMapOutlined} from "@mui/icons-material";

figma.connect(
  ZoominMapOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11384",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ZoominMapOutlined {...props} />
  }
);