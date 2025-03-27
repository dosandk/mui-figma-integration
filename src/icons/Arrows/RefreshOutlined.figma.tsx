
import figma from "@figma/code-connect";
import {RefreshOutlined} from "@mui/icons-material";

figma.connect(
  RefreshOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11549",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RefreshOutlined {...props} />
  }
);