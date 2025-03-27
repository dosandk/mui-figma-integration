
import figma from "@figma/code-connect";
import {MergeOutlined} from "@mui/icons-material";

figma.connect(
  MergeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11498",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MergeOutlined {...props} />
  }
);