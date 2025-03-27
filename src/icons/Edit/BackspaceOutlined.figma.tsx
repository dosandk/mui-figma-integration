
import figma from "@figma/code-connect";
import {BackspaceOutlined} from "@mui/icons-material";

figma.connect(
  BackspaceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12563",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BackspaceOutlined {...props} />
  }
);