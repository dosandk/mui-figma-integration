
import figma from "@figma/code-connect";
import {LocalPlayOutlined} from "@mui/icons-material";

figma.connect(
  LocalPlayOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:13134",
  { 
    props: {
    
    },
    example: ({ ...props }) => <LocalPlayOutlined {...props} />
  }
);