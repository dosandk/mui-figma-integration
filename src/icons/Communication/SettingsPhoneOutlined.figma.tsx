
import figma from "@figma/code-connect";
import {SettingsPhoneOutlined} from "@mui/icons-material";

figma.connect(
  SettingsPhoneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3040",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SettingsPhoneOutlined {...props} />
  }
);