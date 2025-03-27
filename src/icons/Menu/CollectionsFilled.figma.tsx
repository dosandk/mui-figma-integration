
import figma from "@figma/code-connect";
import {CollectionsFilled} from "@mui/icons-material";

figma.connect(
  CollectionsFilled, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112410",
  { 
    props: {
    
    },
    example: ({ ...props }) => <CollectionsFilled {...props} />
  }
);