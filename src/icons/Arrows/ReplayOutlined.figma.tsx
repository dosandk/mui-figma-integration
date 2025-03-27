
import figma from "@figma/code-connect";
import {ReplayOutlined} from "@mui/icons-material";

figma.connect(
  ReplayOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11537",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ReplayOutlined {...props} />
  }
);