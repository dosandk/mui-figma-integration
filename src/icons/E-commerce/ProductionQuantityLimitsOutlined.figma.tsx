
import figma from "@figma/code-connect";
import {ProductionQuantityLimitsOutlined} from "@mui/icons-material";

figma.connect(
  ProductionQuantityLimitsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866954",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ProductionQuantityLimitsOutlined {...props} />
  }
);