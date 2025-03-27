
import figma from "@figma/code-connect";
import {FliptoFrontOutlined} from "@mui/icons-material";

figma.connect(
  FliptoFrontOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3595",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FliptoFrontOutlined {...props} />
  }
);