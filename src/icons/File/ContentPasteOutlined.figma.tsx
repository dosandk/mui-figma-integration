
import figma from "@figma/code-connect";
import {ContentPasteOutlined} from "@mui/icons-material";

figma.connect(
  ContentPasteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:65850",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContentPasteOutlined {...props} />
  }
);