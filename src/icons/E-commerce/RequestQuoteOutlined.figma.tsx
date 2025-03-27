
import figma from "@figma/code-connect";
import {RequestQuoteOutlined} from "@mui/icons-material";

figma.connect(
  RequestQuoteOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11246",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RequestQuoteOutlined {...props} />
  }
);