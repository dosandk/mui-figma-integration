
import figma from "@figma/code-connect";
import {ForkLeftOutlined} from "@mui/icons-material";

figma.connect(
  ForkLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11486",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ForkLeftOutlined {...props} />
  }
);