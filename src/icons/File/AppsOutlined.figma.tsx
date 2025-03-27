
import figma from "@figma/code-connect";
import {AppsOutlined} from "@mui/icons-material";

figma.connect(
  AppsOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3625",
  { 
    props: {
    
    },
    example: ({ ...props }) => <AppsOutlined {...props} />
  }
);