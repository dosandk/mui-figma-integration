
import figma from "@figma/code-connect";
import {VerifiedUserOutlined} from "@mui/icons-material";

figma.connect(
  VerifiedUserOutlined, 
  "<FIGMA_ICONS_BASE>?node-id=11714:3407",
  { 
    props: {
    
    },
    example: ({ ...props }) => <VerifiedUserOutlined {...props} />
  }
);