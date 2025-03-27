
import figma from "@figma/code-connect";
import {FormatQuoteOutlined} from "@mui/icons-material";

figma.connect(
  FormatQuoteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3203",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FormatQuoteOutlined {...props} />
  }
);