
import figma from "@figma/code-connect";
import {SettingsApplicationsOutlined} from "@mui/icons-material";

figma.connect(
  SettingsApplicationsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13055",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SettingsApplicationsOutlined {...props} />
  }
);