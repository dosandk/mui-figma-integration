
import figma from "@figma/code-connect";
import {RepeatonOutlined} from "@mui/icons-material";

figma.connect(
  RepeatonOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11412",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RepeatonOutlined {...props} />
  }
);