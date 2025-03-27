
import figma from "@figma/code-connect";
import {CancelOutlined} from "@mui/icons-material";

figma.connect(
  CancelOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:54212",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CancelOutlined {...props} />
  }
);