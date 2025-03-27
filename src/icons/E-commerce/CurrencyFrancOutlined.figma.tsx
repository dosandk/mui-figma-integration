
import figma from "@figma/code-connect";
import {CurrencyFrancOutlined} from "@mui/icons-material";

figma.connect(
  CurrencyFrancOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866977",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyFrancOutlined {...props} />
  }
);