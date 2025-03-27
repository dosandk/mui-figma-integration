
import figma from "@figma/code-connect";
import {WifiCallingOutlined} from "@mui/icons-material";

figma.connect(
  WifiCallingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3032",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WifiCallingOutlined {...props} />
  }
);