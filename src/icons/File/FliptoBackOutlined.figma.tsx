
import figma from "@figma/code-connect";
import {FliptoBackOutlined} from "@mui/icons-material";

figma.connect(
  FliptoBackOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3594",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FliptoBackOutlined {...props} />
  }
);