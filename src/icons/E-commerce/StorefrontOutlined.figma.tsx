
import figma from "@figma/code-connect";
import {StorefrontOutlined} from "@mui/icons-material";

figma.connect(
  StorefrontOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866957",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StorefrontOutlined {...props} />
  }
);