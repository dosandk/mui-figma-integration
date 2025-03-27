
import figma from "@figma/code-connect";
import {ContentPasteGoFilled} from "@mui/icons-material";

figma.connect(
  ContentPasteGoFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13178",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContentPasteGoFilled {...props} />
  }
);