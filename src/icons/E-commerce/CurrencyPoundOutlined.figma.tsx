
import figma from "@figma/code-connect";
import {CurrencyPoundOutlined} from "@mui/icons-material";

figma.connect(
  CurrencyPoundOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866983",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyPoundOutlined {...props} />
  }
);