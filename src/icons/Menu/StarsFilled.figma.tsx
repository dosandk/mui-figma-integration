
import figma from "@figma/code-connect";
import {StarsFilled} from "@mui/icons-material";

figma.connect(
  StarsFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13242",
  { 
    props: {
    
    },
    example: ({ ...props }) => <StarsFilled {...props} />
  }
);