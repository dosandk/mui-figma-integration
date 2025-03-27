
import figma from "@figma/code-connect";
import {Account} from "@mui/icons-material";

figma.connect(
  Account, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12740",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Account {...props} />
  }
);