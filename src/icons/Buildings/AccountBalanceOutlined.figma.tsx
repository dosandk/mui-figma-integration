
import figma from "@figma/code-connect";
import {AccountBalanceOutlined} from "@mui/icons-material";

figma.connect(
  AccountBalanceOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3817",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccountBalanceOutlined {...props} />
  }
);