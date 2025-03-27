
import figma from "@figma/code-connect";
import {ChangeUser} from "@mui/icons-material";

figma.connect(
  ChangeUser, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11985",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChangeUser {...props} />
  }
);