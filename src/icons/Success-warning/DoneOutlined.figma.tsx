
import figma from "@figma/code-connect";
import {DoneOutlined} from "@mui/icons-material";

figma.connect(
  DoneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54224",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DoneOutlined {...props} />
  }
);