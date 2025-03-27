
import figma from "@figma/code-connect";
import {AccessTimeOutlined} from "@mui/icons-material";

figma.connect(
  AccessTimeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112402",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AccessTimeOutlined {...props} />
  }
);