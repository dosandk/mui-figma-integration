
import figma from "@figma/code-connect";
import {Shop2Outlined} from "@mui/icons-material";

figma.connect(
  Shop2Outlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866958",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Shop2Outlined {...props} />
  }
);