
import figma from "@figma/code-connect";
import {ExittoAppOutlined} from "@mui/icons-material";

figma.connect(
  ExittoAppOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3467",
  { 
    props: {
    
    },
    example: ({ ...props }) => <ExittoAppOutlined {...props} />
  }
);