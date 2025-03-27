
import figma from "@figma/code-connect";
import {FormatColorTextOutlined} from "@mui/icons-material";

figma.connect(
  FormatColorTextOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3189",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatColorTextOutlined {...props} />
  }
);