
import figma from "@figma/code-connect";
import {RepeatOneonOutlined} from "@mui/icons-material";

figma.connect(
  RepeatOneonOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11409",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RepeatOneonOutlined {...props} />
  }
);