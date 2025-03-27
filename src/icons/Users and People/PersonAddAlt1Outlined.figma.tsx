
import figma from "@figma/code-connect";
import {PersonAddAlt1Outlined} from "@mui/icons-material";

figma.connect(
  PersonAddAlt1Outlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11707",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PersonAddAlt1Outlined {...props} />
  }
);