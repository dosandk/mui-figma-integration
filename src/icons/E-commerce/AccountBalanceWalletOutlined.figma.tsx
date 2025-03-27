
import figma from "@figma/code-connect";
import {AccountBalanceWalletOutlined} from "@mui/icons-material";

figma.connect(
  AccountBalanceWalletOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866981",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccountBalanceWalletOutlined {...props} />
  }
);