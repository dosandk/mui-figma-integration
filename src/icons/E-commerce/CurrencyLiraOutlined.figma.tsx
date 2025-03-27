
import figma from "@figma/code-connect";
import {CurrencyLiraOutlined} from "@mui/icons-material";

figma.connect(
  CurrencyLiraOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866970",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CurrencyLiraOutlined {...props} />
  }
);