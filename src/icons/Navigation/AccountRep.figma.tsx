
import figma from "@figma/code-connect";
import {AccountRep} from "@mui/icons-material";

figma.connect(
  AccountRep, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12756",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccountRep {...props} />
  }
);