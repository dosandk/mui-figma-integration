
import figma from "@figma/code-connect";
import {PolicyOutlined} from "@mui/icons-material";

figma.connect(
  PolicyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3413",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PolicyOutlined {...props} />
  }
);