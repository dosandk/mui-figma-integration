
import figma from "@figma/code-connect";
import {WarningAmberOutlined} from "@mui/icons-material";

figma.connect(
  WarningAmberOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:69464",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WarningAmberOutlined {...props} />
  }
);