
import figma from "@figma/code-connect";
import {PhoneOutlined} from "@mui/icons-material";

figma.connect(
  PhoneOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12115",
  { 
    props: {
    
    },
    example: ({ ...props }) => <PhoneOutlined {...props} />
  }
);