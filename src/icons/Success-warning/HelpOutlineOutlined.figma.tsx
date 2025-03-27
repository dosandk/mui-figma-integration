
import figma from "@figma/code-connect";
import {HelpOutlineOutlined} from "@mui/icons-material";

figma.connect(
  HelpOutlineOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12447",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HelpOutlineOutlined {...props} />
  }
);