
import figma from "@figma/code-connect";
import {SettingsApplicationsFilled} from "@mui/icons-material";

figma.connect(
  SettingsApplicationsFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13220",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SettingsApplicationsFilled {...props} />
  }
);