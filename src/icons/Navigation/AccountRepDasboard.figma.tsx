
import figma from "@figma/code-connect";
import {AccountRepDasboard} from "@mui/icons-material";

figma.connect(
  AccountRepDasboard, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12758",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccountRepDasboard {...props} />
  }
);