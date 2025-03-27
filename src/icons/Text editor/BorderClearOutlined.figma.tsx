
import figma from "@figma/code-connect";
import {BorderClearOutlined} from "@mui/icons-material";

figma.connect(
  BorderClearOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3227",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderClearOutlined {...props} />
  }
);