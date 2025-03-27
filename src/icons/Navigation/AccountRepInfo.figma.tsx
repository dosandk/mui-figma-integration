
import figma from "@figma/code-connect";
import {AccountRepInfo} from "@mui/icons-material";

figma.connect(
  AccountRepInfo, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12780",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccountRepInfo {...props} />
  }
);