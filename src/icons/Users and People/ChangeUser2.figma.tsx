
import figma from "@figma/code-connect";
import {ChangeUser2} from "@mui/icons-material";

figma.connect(
  ChangeUser2, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11993",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ChangeUser2 {...props} />
  }
);