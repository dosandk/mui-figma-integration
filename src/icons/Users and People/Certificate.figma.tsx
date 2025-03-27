
import figma from "@figma/code-connect";
import {Certificate} from "@mui/icons-material";

figma.connect(
  Certificate, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11784",
  { 
    props: {
    
    },
    example: ({ ...props }) => <Certificate {...props} />
  }
);