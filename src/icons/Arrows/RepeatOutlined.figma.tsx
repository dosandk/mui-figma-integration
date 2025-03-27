
import figma from "@figma/code-connect";
import {RepeatOutlined} from "@mui/icons-material";

figma.connect(
  RepeatOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:11405",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RepeatOutlined {...props} />
  }
);