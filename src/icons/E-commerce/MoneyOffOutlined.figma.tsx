
import figma from "@figma/code-connect";
import {MoneyOffOutlined} from "@mui/icons-material";

figma.connect(
  MoneyOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866985",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MoneyOffOutlined {...props} />
  }
);