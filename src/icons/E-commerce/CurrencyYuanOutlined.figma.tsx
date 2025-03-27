
import figma from "@figma/code-connect";
import {CurrencyYuanOutlined} from "@mui/icons-material";

figma.connect(
  CurrencyYuanOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866973",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyYuanOutlined {...props} />
  }
);