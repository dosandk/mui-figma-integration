
import figma from "@figma/code-connect";
import {MaximizeOutlined} from "@mui/icons-material";

figma.connect(
  MaximizeOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3479",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MaximizeOutlined {...props} />
  }
);