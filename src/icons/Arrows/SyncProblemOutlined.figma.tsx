
import figma from "@figma/code-connect";
import {SyncProblemOutlined} from "@mui/icons-material";

figma.connect(
  SyncProblemOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11516",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SyncProblemOutlined {...props} />
  }
);