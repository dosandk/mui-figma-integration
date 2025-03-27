
import figma from "@figma/code-connect";
import {SyncOutlined} from "@mui/icons-material";

figma.connect(
  SyncOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11518",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SyncOutlined {...props} />
  }
);