
import figma from "@figma/code-connect";
import {EditLocationAltOutlined} from "@mui/icons-material";

figma.connect(
  EditLocationAltOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3149",
  { 
    props: {
    
    },
    example: ({ ...props }) => <EditLocationAltOutlined {...props} />
  }
);