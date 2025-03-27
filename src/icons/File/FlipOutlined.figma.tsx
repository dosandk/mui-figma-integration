
import figma from "@figma/code-connect";
import {FlipOutlined} from "@mui/icons-material";

figma.connect(
  FlipOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3624",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FlipOutlined {...props} />
  }
);