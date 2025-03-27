
import figma from "@figma/code-connect";
import {LocalMallOutlined} from "@mui/icons-material";

figma.connect(
  LocalMallOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11706:866955",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocalMallOutlined {...props} />
  }
);