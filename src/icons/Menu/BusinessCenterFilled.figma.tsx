
import figma from "@figma/code-connect";
import {BusinessCenterFilled} from "@mui/icons-material";

figma.connect(
  BusinessCenterFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13150",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BusinessCenterFilled {...props} />
  }
);