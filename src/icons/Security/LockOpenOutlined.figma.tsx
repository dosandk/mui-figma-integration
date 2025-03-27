
import figma from "@figma/code-connect";
import {LockOpenOutlined} from "@mui/icons-material";

figma.connect(
  LockOpenOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3404",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LockOpenOutlined {...props} />
  }
);