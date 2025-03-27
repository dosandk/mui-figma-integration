
import figma from "@figma/code-connect";
import {DisplaySettingsOutlined} from "@mui/icons-material";

figma.connect(
  DisplaySettingsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13059",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DisplaySettingsOutlined {...props} />
  }
);