
import figma from "@figma/code-connect";
import {KeyboardDoubleArrowRightOutlined} from "@mui/icons-material";

figma.connect(
  KeyboardDoubleArrowRightOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11445",
  { 
    props: {
    
    },
    example: ({ ...props }) => <KeyboardDoubleArrowRightOutlined {...props} />
  }
);