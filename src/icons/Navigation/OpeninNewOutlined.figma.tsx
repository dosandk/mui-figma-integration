
import figma from "@figma/code-connect";
import {OpeninNewOutlined} from "@mui/icons-material";

figma.connect(
  OpeninNewOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112412",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OpeninNewOutlined {...props} />
  }
);