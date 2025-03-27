
import figma from "@figma/code-connect";
import {LocalShippingOutlined} from "@mui/icons-material";

figma.connect(
  LocalShippingOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12244",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocalShippingOutlined {...props} />
  }
);