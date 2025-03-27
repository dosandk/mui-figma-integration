
import figma from "@figma/code-connect";
import {SettingsSuggestOutlined} from "@mui/icons-material";

figma.connect(
  SettingsSuggestOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13051",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SettingsSuggestOutlined {...props} />
  }
);