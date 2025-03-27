
import figma from "@figma/code-connect";
import {LockOutlined} from "@mui/icons-material";

figma.connect(
  LockOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=9602:112413",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LockOutlined {...props} />
  }
);