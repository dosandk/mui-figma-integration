
import figma from "@figma/code-connect";
import {RepeatOneOutlined} from "@mui/icons-material";

figma.connect(
  RepeatOneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11407",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RepeatOneOutlined {...props} />
  }
);