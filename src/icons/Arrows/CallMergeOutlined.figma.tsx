
import figma from "@figma/code-connect";
import {CallMergeOutlined} from "@mui/icons-material";

figma.connect(
  CallMergeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11496",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CallMergeOutlined {...props} />
  }
);