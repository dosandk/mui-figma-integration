
import figma from "@figma/code-connect";
import {FmdBadOutlined} from "@mui/icons-material";

figma.connect(
  FmdBadOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3139",
  { 
    props: {
    
    },
    example: ({ ...props }) => <FmdBadOutlined {...props} />
  }
);