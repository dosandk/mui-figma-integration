
import figma from "@figma/code-connect";
import {SwitchAccessShortcutAddOutlined} from "@mui/icons-material";

figma.connect(
  SwitchAccessShortcutAddOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11389",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SwitchAccessShortcutAddOutlined {...props} />
  }
);