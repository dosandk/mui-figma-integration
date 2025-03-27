
import figma from "@figma/code-connect";
import {ShortcutOutlined} from "@mui/icons-material";

figma.connect(
  ShortcutOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11361",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShortcutOutlined {...props} />
  }
);