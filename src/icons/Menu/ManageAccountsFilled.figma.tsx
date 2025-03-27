
import figma from "@figma/code-connect";
import {ManageAccountsFilled} from "@mui/icons-material";

figma.connect(
  ManageAccountsFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13162",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ManageAccountsFilled {...props} />
  }
);