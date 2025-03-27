
import figma from "@figma/code-connect";
import {ForwardtoInboxOutlined} from "@mui/icons-material";

figma.connect(
  ForwardtoInboxOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12077",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ForwardtoInboxOutlined {...props} />
  }
);