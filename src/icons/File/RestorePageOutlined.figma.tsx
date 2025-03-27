
import figma from "@figma/code-connect";
import {RestorePageOutlined} from "@mui/icons-material";

figma.connect(
  RestorePageOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3574",
  { 
    props: {
    
    },
    example: ({ ...props }) => <RestorePageOutlined {...props} />
  }
);