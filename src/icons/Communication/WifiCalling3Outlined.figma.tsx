
import figma from "@figma/code-connect";
import {WifiCalling3Outlined} from "@mui/icons-material";

figma.connect(
  WifiCalling3Outlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3050",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WifiCalling3Outlined {...props} />
  }
);