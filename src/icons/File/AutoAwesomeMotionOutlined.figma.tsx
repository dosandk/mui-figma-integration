
import figma from "@figma/code-connect";
import {AutoAwesomeMotionOutlined} from "@mui/icons-material";

figma.connect(
  AutoAwesomeMotionOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12810",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AutoAwesomeMotionOutlined {...props} />
  }
);