
import figma from "@figma/code-connect";
import {ShieldOutlined} from "@mui/icons-material";

figma.connect(
  ShieldOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3416",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ShieldOutlined {...props} />
  }
);