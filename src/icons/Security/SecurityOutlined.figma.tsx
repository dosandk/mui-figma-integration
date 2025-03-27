
import figma from "@figma/code-connect";
import {SecurityOutlined} from "@mui/icons-material";

figma.connect(
  SecurityOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3412",
  { 
    props: {
    
    },
    example: ({ ...props }) => <SecurityOutlined {...props} />
  }
);