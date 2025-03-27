
import figma from "@figma/code-connect";
import {BeenhereOutlined} from "@mui/icons-material";

figma.connect(
  BeenhereOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12430",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BeenhereOutlined {...props} />
  }
);