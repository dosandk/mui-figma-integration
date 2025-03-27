
import figma from "@figma/code-connect";
import {FormatUnderlinedOutlined} from "@mui/icons-material";

figma.connect(
  FormatUnderlinedOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3213",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatUnderlinedOutlined {...props} />
  }
);