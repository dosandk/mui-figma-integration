
import figma from "@figma/code-connect";
import {WebhookFilled} from "@mui/icons-material";

figma.connect(
  WebhookFilled, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13156",
  { 
    props: {
    
    },
    example: ({ ...props }) => <WebhookFilled {...props} />
  }
);