
import figma from "@figma/code-connect";
import {KeyboardDoubleArrowLeftOutlined} from "@mui/icons-material";

figma.connect(
  KeyboardDoubleArrowLeftOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11450",
  { 
    props: {
    
    },
    example: ({ ...props }) => <KeyboardDoubleArrowLeftOutlined {...props} />
  }
);