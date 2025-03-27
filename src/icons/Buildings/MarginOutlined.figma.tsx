
import figma from "@figma/code-connect";
import {MarginOutlined} from "@mui/icons-material";

figma.connect(
  MarginOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11715:3809",
  { 
    props: {
    
    },
    example: ({ ...props }) => <MarginOutlined {...props} />
  }
);