
import figma from "@figma/code-connect";
import {SettingsOutlined} from "@mui/icons-material";

figma.connect(
  SettingsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:72968",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SettingsOutlined {...props} />
  }
);