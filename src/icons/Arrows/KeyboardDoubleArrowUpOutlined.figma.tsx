
import figma from "@figma/code-connect";
import {KeyboardDoubleArrowUpOutlined} from "@mui/icons-material";

figma.connect(
  KeyboardDoubleArrowUpOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11440",
  { 
    props: {
    
    },
    example: ({ ...props }) => <KeyboardDoubleArrowUpOutlined {...props} />
  }
);