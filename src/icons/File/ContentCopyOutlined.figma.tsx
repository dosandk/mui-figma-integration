
import figma from "@figma/code-connect";
import {ContentCopyOutlined} from "@mui/icons-material";

figma.connect(
  ContentCopyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:65825",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContentCopyOutlined {...props} />
  }
);