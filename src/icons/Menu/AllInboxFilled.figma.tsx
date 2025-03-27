
import figma from "@figma/code-connect";
import {AllInboxFilled} from "@mui/icons-material";

figma.connect(
  AllInboxFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13274",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AllInboxFilled {...props} />
  }
);