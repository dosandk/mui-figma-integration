
import figma from "@figma/code-connect";
import {SupervisorAccountOutlined} from "@mui/icons-material";

figma.connect(
  SupervisorAccountOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11746",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SupervisorAccountOutlined {...props} />
  }
);