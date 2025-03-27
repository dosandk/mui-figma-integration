
import figma from "@figma/code-connect";
import {CallSplitOutlined} from "@mui/icons-material";

figma.connect(
  CallSplitOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11494",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CallSplitOutlined {...props} />
  }
);