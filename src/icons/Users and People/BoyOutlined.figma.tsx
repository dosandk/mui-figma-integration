
import figma from "@figma/code-connect";
import {BoyOutlined} from "@mui/icons-material";

figma.connect(
  BoyOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:867040",
  { 
    props: {
    
    },
    example: ({ ...props }) => <BoyOutlined {...props} />
  }
);