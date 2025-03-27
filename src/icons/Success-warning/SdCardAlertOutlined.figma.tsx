
import figma from "@figma/code-connect";
import {SdCardAlertOutlined} from "@mui/icons-material";

figma.connect(
  SdCardAlertOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12420",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SdCardAlertOutlined {...props} />
  }
);