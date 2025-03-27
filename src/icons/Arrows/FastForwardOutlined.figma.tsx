
import figma from "@figma/code-connect";
import {FastForwardOutlined} from "@mui/icons-material";

figma.connect(
  FastForwardOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11462",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FastForwardOutlined {...props} />
  }
);