
import figma from "@figma/code-connect";
import {ContentCutOutlined} from "@mui/icons-material";

figma.connect(
  ContentCutOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=7475:65837",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ContentCutOutlined {...props} />
  }
);