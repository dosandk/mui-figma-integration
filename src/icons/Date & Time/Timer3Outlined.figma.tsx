
import figma from "@figma/code-connect";
import {Timer3Outlined} from "@mui/icons-material";

figma.connect(
  Timer3Outlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866908",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Timer3Outlined {...props} />
  }
);