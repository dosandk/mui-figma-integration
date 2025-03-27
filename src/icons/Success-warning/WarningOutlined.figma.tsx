
import figma from "@figma/code-connect";
import {WarningOutlined} from "@mui/icons-material";

figma.connect(
  WarningOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:69452",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WarningOutlined {...props} />
  }
);