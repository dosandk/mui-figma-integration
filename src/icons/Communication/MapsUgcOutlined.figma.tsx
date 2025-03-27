
import figma from "@figma/code-connect";
import {MapsUgcOutlined} from "@mui/icons-material";

figma.connect(
  MapsUgcOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3051",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MapsUgcOutlined {...props} />
  }
);