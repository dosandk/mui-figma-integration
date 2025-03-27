
import figma from "@figma/code-connect";
import {BorderStyleOutlined} from "@mui/icons-material";

figma.connect(
  BorderStyleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3226",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderStyleOutlined {...props} />
  }
);