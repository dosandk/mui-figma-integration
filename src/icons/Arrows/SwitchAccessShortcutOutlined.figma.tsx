
import figma from "@figma/code-connect";
import {SwitchAccessShortcutOutlined} from "@mui/icons-material";

figma.connect(
  SwitchAccessShortcutOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11387",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwitchAccessShortcutOutlined {...props} />
  }
);