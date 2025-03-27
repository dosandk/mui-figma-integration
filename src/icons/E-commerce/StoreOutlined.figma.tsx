
import figma from "@figma/code-connect";
import {StoreOutlined} from "@mui/icons-material";

figma.connect(
  StoreOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11273",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StoreOutlined {...props} />
  }
);