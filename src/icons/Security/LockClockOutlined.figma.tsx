
import figma from "@figma/code-connect";
import {LockClockOutlined} from "@mui/icons-material";

figma.connect(
  LockClockOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3403",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LockClockOutlined {...props} />
  }
);