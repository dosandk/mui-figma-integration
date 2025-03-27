
import figma from "@figma/code-connect";
import {AccessibleOutlined} from "@mui/icons-material";

figma.connect(
  AccessibleOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867012",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccessibleOutlined {...props} />
  }
);