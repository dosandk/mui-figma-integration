
import figma from "@figma/code-connect";
import {SupportAgentOutlined} from "@mui/icons-material";

figma.connect(
  SupportAgentOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867077",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SupportAgentOutlined {...props} />
  }
);