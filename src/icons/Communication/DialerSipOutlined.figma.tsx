
import figma from "@figma/code-connect";
import {DialerSipOutlined} from "@mui/icons-material";

figma.connect(
  DialerSipOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3072",
  { 
    props: {
    
    },
    example: ({ ...props }) => <DialerSipOutlined {...props} />
  }
);