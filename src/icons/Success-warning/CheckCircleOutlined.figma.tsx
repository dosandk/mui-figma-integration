
import figma from "@figma/code-connect";
import {CheckCircleOutlined} from "@mui/icons-material";

figma.connect(
  CheckCircleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:70369",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CheckCircleOutlined {...props} />
  }
);