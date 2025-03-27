
import figma from "@figma/code-connect";
import {CurrencyRupeeOutlined} from "@mui/icons-material";

figma.connect(
  CurrencyRupeeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866971",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyRupeeOutlined {...props} />
  }
);