
import figma from "@figma/code-connect";
import {3pOutlined} from "@mui/icons-material";

figma.connect(
  3pOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11673:12102",
  { 
    props: {
    
    },
    example: ({ ...props }) => <3pOutlined {...props} />
  }
);