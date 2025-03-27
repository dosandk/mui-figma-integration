
import figma from "@figma/code-connect";
import {BorderOuterOutlined} from "@mui/icons-material";

figma.connect(
  BorderOuterOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3225",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderOuterOutlined {...props} />
  }
);