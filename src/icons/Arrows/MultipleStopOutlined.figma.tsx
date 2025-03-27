
import figma from "@figma/code-connect";
import {MultipleStopOutlined} from "@mui/icons-material";

figma.connect(
  MultipleStopOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11347",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MultipleStopOutlined {...props} />
  }
);