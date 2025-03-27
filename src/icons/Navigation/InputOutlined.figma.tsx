
import figma from "@figma/code-connect";
import {InputOutlined} from "@mui/icons-material";

figma.connect(
  InputOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3472",
  { 
    props: {
    
    },
    example: ({ ...props }) => <InputOutlined {...props} />
  }
);