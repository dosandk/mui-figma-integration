
import figma from "@figma/code-connect";
import {ContentPasteSearchOutlined} from "@mui/icons-material";

figma.connect(
  ContentPasteSearchOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12814",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContentPasteSearchOutlined {...props} />
  }
);