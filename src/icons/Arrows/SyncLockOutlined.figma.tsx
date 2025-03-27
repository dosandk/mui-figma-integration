
import figma from "@figma/code-connect";
import {SyncLockOutlined} from "@mui/icons-material";

figma.connect(
  SyncLockOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11520",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SyncLockOutlined {...props} />
  }
);