
import figma from "@figma/code-connect";
import {PriceChangeOutlined} from "@mui/icons-material";

figma.connect(
  PriceChangeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866952",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PriceChangeOutlined {...props} />
  }
);