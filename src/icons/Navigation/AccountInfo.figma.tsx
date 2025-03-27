
import figma from "@figma/code-connect";
import {AccountInfo} from "@mui/icons-material";

figma.connect(
  AccountInfo, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12744",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccountInfo {...props} />
  }
);