
import figma from "@figma/code-connect";
import {HelpCenterOutlined} from "@mui/icons-material";

figma.connect(
  HelpCenterOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12449",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HelpCenterOutlined {...props} />
  }
);