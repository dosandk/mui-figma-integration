
import figma from "@figma/code-connect";
import {HelpOutlined} from "@mui/icons-material";

figma.connect(
  HelpOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12445",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HelpOutlined {...props} />
  }
);