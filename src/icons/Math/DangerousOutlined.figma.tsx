
import figma from "@figma/code-connect";
import {DangerousOutlined} from "@mui/icons-material";

figma.connect(
  DangerousOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12616",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DangerousOutlined {...props} />
  }
);