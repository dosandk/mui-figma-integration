
import figma from "@figma/code-connect";
import {BorderBottomOutlined} from "@mui/icons-material";

figma.connect(
  BorderBottomOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3217",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BorderBottomOutlined {...props} />
  }
);