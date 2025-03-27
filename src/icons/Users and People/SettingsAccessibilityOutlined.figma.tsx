
import figma from "@figma/code-connect";
import {SettingsAccessibilityOutlined} from "@mui/icons-material";

figma.connect(
  SettingsAccessibilityOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867018",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SettingsAccessibilityOutlined {...props} />
  }
);