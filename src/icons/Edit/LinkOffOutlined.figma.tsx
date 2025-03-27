
import figma from "@figma/code-connect";
import {LinkOffOutlined} from "@mui/icons-material";

figma.connect(
  LinkOffOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12567",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LinkOffOutlined {...props} />
  }
);