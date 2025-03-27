
import figma from "@figma/code-connect";
import {StartOutlined} from "@mui/icons-material";

figma.connect(
  StartOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11467",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StartOutlined {...props} />
  }
);