
import figma from "@figma/code-connect";
import {HandymanOutlined} from "@mui/icons-material";

figma.connect(
  HandymanOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13074",
  { 
    props: {
    
    },
    example: ({ ...props }) => <HandymanOutlined {...props} />
  }
);