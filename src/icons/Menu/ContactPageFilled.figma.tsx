
import figma from "@figma/code-connect";
import {ContactPageFilled} from "@mui/icons-material";

figma.connect(
  ContactPageFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13268",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContactPageFilled {...props} />
  }
);