
import figma from "@figma/code-connect";
import {KeyboardDoubleArrowDownOutlined} from "@mui/icons-material";

figma.connect(
  KeyboardDoubleArrowDownOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11455",
  { 
    props: {
    
    },
    example: ({ ...props }) => <KeyboardDoubleArrowDownOutlined {...props} />
  }
);