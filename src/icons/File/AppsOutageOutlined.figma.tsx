
import figma from "@figma/code-connect";
import {AppsOutageOutlined} from "@mui/icons-material";

figma.connect(
  AppsOutageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3622",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AppsOutageOutlined {...props} />
  }
);