
import figma from "@figma/code-connect";
import {ContentPasteOffOutlined} from "@mui/icons-material";

figma.connect(
  ContentPasteOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3617",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContentPasteOffOutlined {...props} />
  }
);