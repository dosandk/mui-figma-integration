
import figma from "@figma/code-connect";
import {PriceCheckOutlined} from "@mui/icons-material";

figma.connect(
  PriceCheckOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11284",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PriceCheckOutlined {...props} />
  }
);