
import figma from "@figma/code-connect";
import {WcOutlined} from "@mui/icons-material";

figma.connect(
  WcOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867072",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WcOutlined {...props} />
  }
);