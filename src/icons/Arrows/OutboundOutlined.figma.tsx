
import figma from "@figma/code-connect";
import {OutboundOutlined} from "@mui/icons-material";

figma.connect(
  OutboundOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11438",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OutboundOutlined {...props} />
  }
);