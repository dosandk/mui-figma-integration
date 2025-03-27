
import figma from "@figma/code-connect";
import {CountertopsOutlined} from "@mui/icons-material";

figma.connect(
  CountertopsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3822",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CountertopsOutlined {...props} />
  }
);