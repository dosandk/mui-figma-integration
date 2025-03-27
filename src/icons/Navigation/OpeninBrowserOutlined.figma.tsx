
import figma from "@figma/code-connect";
import {OpeninBrowserOutlined} from "@mui/icons-material";

figma.connect(
  OpeninBrowserOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3463",
  { 
    props: {
    
    },
    example: ({ ...props }) => <OpeninBrowserOutlined {...props} />
  }
);