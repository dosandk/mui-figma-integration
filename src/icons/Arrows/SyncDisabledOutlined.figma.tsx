
import figma from "@figma/code-connect";
import {SyncDisabledOutlined} from "@mui/icons-material";

figma.connect(
  SyncDisabledOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11523",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SyncDisabledOutlined {...props} />
  }
);