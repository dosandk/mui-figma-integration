
import figma from "@figma/code-connect";
import {ForwardOutlined} from "@mui/icons-material";

figma.connect(
  ForwardOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11570",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ForwardOutlined {...props} />
  }
);